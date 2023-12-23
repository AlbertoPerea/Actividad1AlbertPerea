import React from 'react';
import {Link} from "react-router-dom";

function Registrodeusuario() {
    return (
        <div>
            <h1>Página en mantenimiento Intente más tarde</h1>
            <img className="movie-img" src={"https://static.vecteezy.com/system/resources/previews/005/211/424/non_2x/man-working-on-laptop-illustration-work-from-home-cartoon-character-free-vector.jpg"} alt={'Mantenimiento'}/>
            <Link className ="colorbanco"  to={"/peliculas"}> {}
                <h4>Regresar a la página principal</h4>
            </Link>
        </div>
    );
}

export default Registrodeusuario;
