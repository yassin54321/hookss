import React from 'react'
import StarRating from './StarRating'


const Search = ({rating,itemText,handleRating,handleText}) => {
  return (
    <div>
        <form>
        <input type="text" style={{backgroundColor:'grey',borderRadius:" 10px"}} value={itemText} onChange={e=>handleText(e.target.value)}/>
            <StarRating rating={rating} handleRating={handleRating}/>
        </form>
    </div>
  )
}

export default Search