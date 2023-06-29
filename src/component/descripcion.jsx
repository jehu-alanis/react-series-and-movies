import React, { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSpinner } from '@fortawesome/free-solid-svg-icons'

const Descripcion = () => {

  const API = 'https://www.omdbapi.com/?i=tt3896198&apikey=b4b5bba';

  const { id } = useParams();
  // console.log(id);
  const [movie, setMovie] = useState({
    data: [],
    loading: true

  });

  useEffect(() => {
    const getMovie = async () => {
      // search
      const res = await fetch(`${API}&t=${id}`)
      const resJSON = await res.json()

      if (resJSON) {
        setMovie({
          data: resJSON,
          loading: false
        });
      }
    };
    getMovie();
  }, [id])

  const { loading } = movie;

  if (loading) {
    return <div>Loading...
      <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>
    </div>;
  }

  return (
    <Fragment><div className="col d-flex justify-content-center pt-4">
      <div className=" card  mb-3 " style={{ maxWidth: 790 }} >
        <div className="row no-gutters">
          <div className="col-md-4  ">
            <img src={movie.data.Poster} className="card-img-top" alt={movie.data.Title} width="100" />
          </div>
          <div className=" col-md-8">
            <div className="card-body">
              <h5 className="card-title">{movie.data.Title} ({movie.data.Year})</h5>
              <p className="card-text">
                Sipnosis: <br />
                {movie.data.Plot}
              </p>
              <p className="card-text">
                Duración: &nbsp;
                {movie.data.Runtime} &nbsp;
                Clasificación: &nbsp;
                {movie.data.Rated} &nbsp;
                Generos: &nbsp;
                {movie.data.Genre} &nbsp;
                Fecha de estreno: &nbsp;
                {movie.data.Released}&nbsp;
              </p>

              <p className="card-text">
                Idioma:&nbsp;
                {movie.data.Language}&nbsp;
              </p>
              <p className="card-text">
                Artores:&nbsp;
                {movie.data.Actors}&nbsp;
                Director:&nbsp;
                {movie.data.Director}&nbsp;
              </p>

              <p className="card-text">
                Total de temporadas:&nbsp;
                {movie.data.totalSeasons}&nbsp; <br />
                Rating:&nbsp;
                {movie.data.imdbRating}/10  &nbsp;

                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default Descripcion;