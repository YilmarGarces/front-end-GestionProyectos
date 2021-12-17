import React, { useEffect, useState } from 'react';
import { useQuery,useMutation} from '@apollo/client';
import { GET_USUARIO } from 'graphql/usuario/queries';
import { useParams, Link } from 'react-router-dom';
import ButtonLoading from 'components/ButtonLoading';
import Input from 'components/Input';
// import { EDITAR_PERFIL } from 'graphql/usuarios/mutations';  
import useFormData from 'hooks/useFormData';
import { useUser } from 'context/userContext';
import { toast } from 'react-toastify';

const Profile = () => {
    const [userData, setUserData] = useState({});
    const { form, formData, updateFormData } = useFormData(null);
    // const [editarPerfil, { data: dataMutation, loading: loadingMutation }] = useMutation(EDITAR_PERFIL);
    const {
        data: queryData,
        loading: queryLoading,
        refetch,
      } = useQuery(GET_USUARIO, {
        variables: {
          _id: userData._id,
        },
      });
    

    return (
        <div className='p-10 flex flex-col items-center justify-center w-full'>
        <h1 className='font-bold text-2xl text-gray-900'>Perfil del usuario</h1>
        <form ref={form} onChange={updateFormData}>
          <Input
            // def  aultValue={queryData.nombre}
            label='Nombre'
            name='nombre'
            type='text'
            required
          />
          <Input
            // defaultValue={queryData.Usuario.apellido}
            label='Apellido'
            name='apellido'
            type='text'
            required
          />
          <Input
            // defaultValue={queryData.Usuario.identificacion}
            label='Identificación'
            name='identificacion'
            type='text'
            required
          />
          <ButtonLoading
            text='Confirmar'
            // loading={loadingMutation}
            disabled={false}
          />
        </form>
      </div>
    )
}

export default Profile;
