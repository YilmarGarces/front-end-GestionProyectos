import React, { useEffect, useState } from 'react';
import { GET_USUARIO } from 'graphql/usuario/queries';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import useFormData from 'hooks/useFormData';
import Input from 'components/Input';
import DropDown from 'components/DropDown';
import { EDITAR_USUARIO } from 'graphql/usuario/mutations';
import { toast } from 'react-toastify';
import ButtonLoading from 'components/ButtonLoading';
import { Enum_EstadoUsuario,Enum_Rol } from 'utils/enums';

const EditarUsuario = () => {
  const [userData, setUserData] = useState({});
  const { form, formData, updateFormData } = useFormData(null);
  const { _id } = useParams();
  const {
    loading: loadingQuery,
    error: errorQuery,
    data: dataQuery,
  } = useQuery(GET_USUARIO, {
    variables: { _id },
  });

  const [editUser, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
    useMutation(EDITAR_USUARIO);

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(formData);
    await editUser({
      variables: { _id, ...formData },
    });
  };

  useEffect(() => {
    if (dataMutation) {
      toast.success('Usuario modificado con exito');
      setUserData(dataMutation.editUser);
    }
    if (dataQuery) {
      console.log('dq', dataQuery);
      setUserData(dataQuery.Usuario);
    }
  }, [dataMutation, dataQuery]);

  useEffect(() => {
    if (errorMutation) {
      toast.error('Error modificando el usuario');
    }
    if(errorQuery){
      toast.error('Error consultando los usuario');
    }
  }, [errorMutation]);

  if (loadingQuery) return <div>Loading....</div>;

  return (
    <div className='flew flex-col w-full h-full items-center justify-center p-10'>
      <Link to='/usuarios'>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
</svg>
      </Link>
      <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Editar Usuario</h1>
      <form
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
        className='flex flex-col items-center justify-center'
      >
        <Input
          label='Nombre de la persona:'
          type='text'
          name='nombre'
          defaultValue={userData.nombre}
          required={true}
        />
        <Input
          label='Apellido de la persona:'
          type='text'
          name='apellido'
          defaultValue={userData.apellido}
          required={true}
        />
        <Input
          label='Correo de la persona:'
          type='email'
          name='correo'
          defaultValue={userData.correo}
          required={true}
        />
        <Input
          label='Identificación de la persona:'
          type='text'
          name='identificacion'
          defaultValue={userData.identificacion}
          required={true}
        />
        
        <DropDown
          label='Estado de la persona:'
          name='estado'
          defaultValue={userData.estado}
          required={true}
          options={Enum_EstadoUsuario}
        />
         <DropDown
          label='Rol de la persona:'
          name='rol'
          defaultValue={userData.rol}
          required={true}
          options={Enum_Rol}
        />
        <ButtonLoading
          disabled={Object.keys(formData).length === 0}
          loading={loadingMutation}
          text='Confirmar'
        />
      </form>
    </div>
  );
};

export default EditarUsuario;
