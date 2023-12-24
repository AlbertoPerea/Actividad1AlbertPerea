import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { useFetch } from "../hooks/useFetch";
import Fueradelinea from '../views/Fueradelinea';

export const Informacion = () => {
  const { id } = useParams();
  const {isLoading, data} = useFetch(`/${id}`);
  
  if (isLoading) {
    return <div className="loading"></div>
  }
  if (data != null){
    return (
        <div className = 'App'>
          <ReactPlayer
            url='https://www.youtube.com/watch?v=3-k8axxVCNU'
            className='react-player'
            playing
            width='100%'
            height='100%'
          />
          <div>
                <h2>{ data.title }</h2>
                <p><strong>Director: </strong>{ data.director }</p>
                <p><strong>Añio: </strong>{ data.anio }</p>
                <p><strong>Genero: </strong>{ data.genero }</p>
                <p><strong>Duración: </strong>{ data.duracion }</p>
                <p><strong>Synpsis: </strong>{ data.synopsis }</p>
                <p><strong>Puntuación: </strong>{ data.puntuacion }</p>
            </div>
        </div>
    );
  }else{
    <Fueradelinea/>
  }
}
