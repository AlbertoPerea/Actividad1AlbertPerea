import React from "react";
import {Link} from "react-router-dom";

function alquilar(id='0'){

}

export const Movie = (props) => {
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
                <button id={props.movie.id} className="center-text alquilarpelicula" type="Button" onClick={alquilar(props.movie.id)}>Alquilar</button>&nbsp;
                <Link className ="colorbanco"  to={`/masinfo/${props.movie.id}`}> {}
                    <h4>Ver triler</h4>
                </Link>
            </div>
        </div>
    );
}

/*<video width="320" height="180" controls>
                    <iframe width="560" height="315" src="https://www.youtube.com/watch?v=n4RhSCAE0OA" frameborder="0" allowfullscreen title="ll"/>
                </video>*/