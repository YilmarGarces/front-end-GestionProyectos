import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from 'graphql/usuario/queries';
import Input from 'components/Input';
import { Link } from 'react-router-dom';
import DropDown from 'components/DropDown';
import ButtonLoading from 'components/ButtonLoading';
import useFormData from 'hooks/useFormData';
import { Enum_TipoObjetivo } from 'utils/enums';
import { nanoid } from 'nanoid';
// import { ObjContext, useObj } from 'context/objContext';

const nuevoProyect = () => {

    return (
        <div className='p-10 flex flex-col items-center'>
          <div className='self-start'>
            <Link to='/proyectos'>
              <i className='fas fa-arrow-left' />
            </Link>
          </div>
          <h1 className='text-2xl font-bold text-gray-900'>Crear Nuevo Proyecto</h1>
          {/* ref={form} onChange={updateFormData} onSubmit={submitForm} */}
          <form >
            <Input name='nombre' label='Nombre del Proyecto' required type='text' />
            <Input
              name='presupuesto'
              label='Presupuesto del Proyecto'
              required
              type='number'
            />
            <Input
              name='fechaInicio'
              label='Fecha de Inicio'
              required
              type='date'
            />
            <Input name='fechaFin' label='Fecha de Fin' required type='date' />
            
            {/* <DropDown label='Líder' name='lider' required /> */}
            Objetivos
            {/* <Objetivos /> */}
            <ButtonLoading text='Crear Proyecto' loading={false} disabled={false} />
          </form>
        </div>
      );
    

}
export default nuevoProyect;
