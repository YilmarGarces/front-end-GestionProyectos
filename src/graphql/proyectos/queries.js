import { gql } from '@apollo/client';

const GET_PROYECTOS = gql`
query Proyectos {
  Proyectos {
    _id
    nombre
    estado
    fase
    objetivos {
      _id
      descripcion
      tipo
    }
    lider {
      _id      
    }
    inscripciones {
      estado
    }
  }
}
`;

export { GET_PROYECTOS};
