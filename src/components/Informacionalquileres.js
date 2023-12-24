import { useParams } from 'react-router-dom';
import { useFetch } from "../hooks/useFetch";
import Fueradelinea from '../views/Fueradelinea';
import {Link} from "react-router-dom";

export const Informacionalquileres = () => {
  const { id } = useParams();
  const {isLoading, data} = useFetch(`/${id}/cliente`); 

  if (isLoading) {
    return <div>Cargando...</div>
  }

  if (data != null){
    return (
      <div>
      <Link to={"/peliculas"}>
          <h1>Regresar a la página de Películas</h1>
      </Link>
      <table border='1'>
        <thead>
          <tr className='fondotitulo'>
            <th>Cliente</th>
            <th>Transacción</th>
            <th>Precio</th>
            <th>Fecha trasaccion</th>
            <th>Fecha expedición</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {data.map((movie =>
            <tr key={data.id}>
              <th className='text-normal'>{movie.cliente}</th>
              <th className='text-normal'>{movie.trasaccion ? 'Alquilado':'Comprado'}</th>
              <th className='text-normal'>{movie.precio}</th>
              <th className='text-normal'>{movie.fechatransaccion}</th>
              <th className='text-normal'>{movie.fechacierre}</th>
              <th className='text-normal'>{movie.telefono}</th>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  }else{
    <Fueradelinea/>
  }
}
