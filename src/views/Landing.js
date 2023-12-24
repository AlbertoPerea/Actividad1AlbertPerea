import React from 'react';
import {Link} from "react-router-dom";
import useRedirection from "../hooks/useRedirection";

function Landing() {
    useRedirection("/peliculas", 3000); // Redireccionamos a la vista de peliculas en 3 segundos
    return (
        <div className="landing">
            <Link to={"/peliculas"}> {}
                <h1>Bienvenidos a Nuestro Sistema Steaming</h1>
            </Link>
            <span className="laser-pointer"></span> 
            <span className="laser-pointer-reverse"></span> 
        </div>
    );
}

export default Landing;