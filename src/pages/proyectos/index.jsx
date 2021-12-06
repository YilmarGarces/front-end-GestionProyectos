import React from 'react';
import { useQuery } from '@apollo/client';
// import { Link } from 'react-router-dom';
import {GET_PROYECTOS} from 'graphql/proyectos/queries';
import {Enum_EstadoProyecto,Enum_FaseProyecto} from 'utils/enums';

const IndexProyectos = () => {
    const { loading, error, data } = useQuery(GET_PROYECTOS);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error...</div>;

    return (
        <div>
      Datos Proyectos:
      <table className='tabla'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Presupuesto</th>
            <th>Fecha de inicio</th>
            <th>Fecha de finalizacion</th>
            <th>Estado</th>
            <th>Fase</th>
            
            
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.Proyectos.map((u) => {
              return (
                <tr key={u._id}>
                  <td>{u.nombre}</td>
                  <td>{u.presupuesto}</td>
                  <td>{u.fechaInicio}</td>
                  <td>{u.fechaFin}</td>
                  <td>{Enum_EstadoProyecto[u.estado]}</td>
                  <td>{Enum_FaseProyecto[u.fase]}</td>
                  
                  <td>
                    {/* <Link to={`/proyectos/editar/${u._id}`}></Link> */}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
    )
}

export default IndexProyectos
