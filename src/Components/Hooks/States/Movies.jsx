import {useState} from 'react'

const Movies = () => {
    const [movies, setMovies] = useState([
        {id: 1, title: 'Spider Man', rating: 3},
        {id: 2, title: 'Superman', rating: 5}
    ]);
    const handleClick = () => {
        setMovies(
            movies.map((m) => (m.id == 1 ? {...movies, title: 'John Winck 5' }: m))
        ) 
    }
  return (
    <div>
        {movies.map((movie) => (
            <ul key={Math.random()}>
                <li>Title: {movie.title}</li>
                <li>Rating: {movie.rating}</li>
            </ul>
        ))}
        <button onClick={handleClick}>Change Name</button>
    </div>
  )
}

export default Movies