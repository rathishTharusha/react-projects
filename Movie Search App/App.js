import React, { useState } from 'react'
import Moviecard from './Moviecard'
import './App.css'

const App = () => {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(!query){
            return null;
        }

        const url = `https://api.themoviedb.org/3/search/movie?api_key=dcd6f67c517fb964bc429d20c576d4f1&language=en-US&query=${query}&page=1`
        
        try{
            const res = await fetch(url)
            const data = await res.json()
            console.log(data.results)
            setMovies(data.results)
        }catch(err){
            console.log(err)
        }
        

    }

    return(
        <div>
            <h1 className="heading">Movie Search App</h1>

            <form onSubmit={handleSubmit} className="movie-search">
            <div class="form-group">
                <label for="movieSearch">Find the movies in your mind from here</label>
                <input 
                    className="form-control"
                    type="text" 
                    placeholder="i.e. Jurassic Park..." 
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
            </div>
                
                
                <button type="submit" className="btn btn-warning">Search</button>
            </form>
        
            <div className="movies">
                {movies.filter(movie => movie.poster_path).map(movie => <Moviecard key={movie.id} movie={movie} />)}
            </div>
            
        </div>
        
    )
}

export default App 