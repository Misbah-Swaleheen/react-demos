import {useState} from 'react'

const Movie = () => {
    const [movie, setMovie] = useState({
        title: 'Equilizer 3',
        rating: 7
    });
    const handleClick = () => {
        // const copyMovie = {
        //     ...movie,
        //     rating: 5
        // }
        setMovie({...movie, rating:5 });
    }
  return (
    <div>
        <h1>Title: {movie.title}</h1>
        <p>Rating: {movie.rating}</p>
        <button onClick={handleClick}>Change Rating</button>
    </div>
  )
}

export default Movie