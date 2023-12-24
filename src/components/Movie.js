import React from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

export const Movie = (props) => {
    const navigate = useNavigate();

    return (
        <div className="movie-card">
            <div className="div-movie">
                <img className="movie-img" src={props.movie.image} alt='nt'/>
            </div>
            <h3 className="center-text">{props.movie.title}</h3>
            <p><b>Sinopsis: </b>{props.movie.synopsis}</p>
            <p><b>Duración: </b>{props.movie.duracion}</p>
            <p><b>Genero: </b>{props.movie.genero}</p>
            <p><b>Puntuación: </b>{props.movie.puntuacion}</p>
            <div>
                <button id={props.movie.id} className="center-text alquilarpelicula" type="Button" onClick={() => navigate(`/registrarusuario/${props.movie.id}`)}>Alquilar</button>&nbsp;
                <button id={props.movie.id} className="center-text" type="Button" onClick={() => navigate(`/Informacionalquileres/${props.movie.id}`)}>Ver transacciones</button>&nbsp;
                <Link className ="colorbanco"  to={`/masinfo/${props.movie.id}`}> {}
                    <h4>Ver triler</h4>
                </Link>
            </div>
        </div>
    );
}