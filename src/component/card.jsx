import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import { Link  } from 'react-router-dom';


 
const Card = ({movie}) => {
return (
  <div className="col-md-3">
    <div className="card animated fadeInUp">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="card-img-top"
        width="100"
      />
      <div className="card-body">
        <h4>{movie.Title} {movie.Year}</h4>
        <p>{movie.Type}</p>
        <Link to= {`/descripcion/${movie.Title}`}>
        <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon> 
        </Link>
      </div>
    </div>
  </div>
);
}



export default Card;