import movies from "../data/movies.json"
import { useState } from 'react'


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
                return (
                    <div key={movieObj.id} className="card">
                        <h3>{movieObj.title}</h3>

                        {movieObj.imgURL
                            && <img src={movieObj.imgURL} alt="Movie poster" />}

                        <p>Year: {movieObj.year}</p>
                        <p>Rating: {movieObj.rating}</p>

                        <button onClick={() => deleteMovie(movieObj.id)}>Delete</button>
                    </div>
                )
            })}
        </>
    )
}

export default MovieList
