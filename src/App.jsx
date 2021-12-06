import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Index from './pages/Index';
import PrivateLayout from './layouts/PrivateLayout';
import IndexUsuarios from './pages/usuarios/index';
import IndexProyectos from './pages/proyectos/index';
import EditarUsuarios from './pages/usuarios/editar';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import IndexCategory1 from 'pages/category1/Index';
import Category1 from 'pages/category1/CategoryPage1';
import './App.css';
import 'styles/globales.css';
import 'styles/table.css';


const client = new ApolloClient({
  uri:"https://servidor-prueba-gql.herokuapp.com/graphql",
  cache:new InMemoryCache()
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
              <Routes>
                <Route path='/' element={<PrivateLayout />}>
                  <Route path='' element={<Index />} />
                  <Route path='usuarios/' element={<IndexUsuarios/>} />
                  <Route path='usuarios/editar/:_id' element={<EditarUsuarios/>} />
                  <Route path='category1' element={<IndexCategory1 />} />
                  <Route path='category1/page1' element={<Category1 />} />
                  <Route path='proyectos/' element={<IndexProyectos />} />
                </Route>
              </Routes>
            </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
