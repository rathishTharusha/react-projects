import React from 'react'
import './Moviecard.css'

const Moviecard = ({movie}) => {
    
    return(
        <div className="card movie-card">
            <img 
                className="card-img-top movie-img"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} 
                alt={movie.title + ' poster'}
            ></img>
            <div className="card-img-overlay">
                <div className="movie-desc">
                    <h1 className="card-title">{movie.title}</h1>
                    <p><small className="movie-content">Release date : {movie.release_date}</small></p>
                    <p><small className="movie-content">RATING: {movie.vote_average}</small></p>
                    <p className="movie-content">{movie.overview}</p>
                </div>
                <img 
                    className="movie-inner-img"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} 
                    alt={movie.title + ' poster'}
                ></img>
            </div>
            
        </div>
    ) 
}

export default Moviecard

