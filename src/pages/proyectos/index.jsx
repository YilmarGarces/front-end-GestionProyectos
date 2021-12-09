import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
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
                    <Link to={`/proyectos/editar/${u._id}`}>
                      <i className='fas fa-pen text-yellow-600 hover:text-yellow-400 cursor-pointer' />
                    </Link>
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
