import movies from "../data/movies.json"
import { useState } from 'react'
import { MovieSummary } from "./MovieSummary"


function MovieList() {
    const [moviesToDisplay, setMoviesToDisplay] = useState(movies)
    const deleteMovie = (movieId) => {
        const newList = moviesToDisplay.filter((movie) => movie.id !== movieId)
        setMoviesToDisplay(newList)
    }

    return (
        <>
            <h2>{moviesToDisplay.length} movies to display</h2>
            {moviesToDisplay.map((movieObj, i, arr) => {
                return <MovieSummary 
                    key={movieObj.id} 
                    movieDetails={movieObj}
                    onDelete={deleteMovie}
                />
            })}
        </>
    )
}

export default MovieList
