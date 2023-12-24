import React from 'react';
import {Link} from "react-router-dom";
//import { useParams } from 'react-router-dom';

function Registrodeusuario() {
    //const {idtransaccion} = useParams();
    //var controltransaccion = 'RE';// registrar
    //idtransaccion !== undefined ? controltransaccion = 'VER': controltransaccion = 'NT';// verpelicula  
    
    return (
        <div>
            <Link  to={"/peliculas"}> {}
                <h4>Regresar a la página principal</h4>
            </Link>
            <h1>Página en mantenimiento Intente más tarde</h1>
            <img className="movie-img" src={"https://static.vecteezy.com/system/resources/previews/005/211/424/non_2x/man-working-on-laptop-illustration-work-from-home-cartoon-character-free-vector.jpg"} alt={'Mantenimiento'}/>
        </div>
    );
}

export default Registrodeusuario;
