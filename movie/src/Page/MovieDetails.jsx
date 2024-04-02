import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function MovieDetails() {
    const { id } = useParams();
    const movies = useSelector(state => state.movie.movie);
    const filteredMovie = movies.find(movieItem => movieItem.id === parseInt(id));

    return (
        <div>
            <h1>Movie Details</h1>
            {filteredMovie && (
                <div className="card">
                    <video src={filteredMovie.image} alt="" />
                    <h4>{filteredMovie.movie}</h4>
                </div>
            )}
        </div>
    );
}

export default MovieDetails;
