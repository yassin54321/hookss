import React from 'react'
import EditMovie from './EditMovie'
import StarRating from './StarRating'

const MovieCard = ({movie,handleDelete,handleEdit}) => {
  return (
    <div className='movie'>
      <h3>{movie.name}</h3>
      <img src={movie.image} alt={movie.name}/>
      <StarRating rating={movie.rating}/>
      <p>{movie.date}</p>
      <p>trailer <br /><iframe width="200" height="200" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
      <h4>{movie.category}</h4>
      <iframe width="340" height="200" src={movie.film} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div id='btn'>
        <button id='btn-delete' onClick={()=>handleDelete(movie.id)}>Delete</button>
        <EditMovie movie={movie} handleEdit={handleEdit}/>
      </div>
      
    </div>
  )
}

export default MovieCard