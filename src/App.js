
import './App.css';
import { useState } from 'react';
import { moviesData } from './data';
import MoviesList from './Components/MoviesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBars from './Components/NavBars';
function App() {
  const [list, setList] = useState(moviesData)
  const [text, setText] = useState("")
  const [rating, setRating] = useState("")
  const handleRating=(x)=>setRating(x)
  const handleText=(y)=>setText(y)
  //console.log(list)
  const handleDelete=(id)=>setList(list.filter(el=>el.id!==id))
  const handleAdd=(newMovieItem)=>setList([...list,newMovieItem])
  const handleEdit=(editeMovie)=>setList(list.map(el=>el.id===editeMovie.id?{...el,...editeMovie}:el))
  return (
    <div className="App">
      <NavBars handleAdd={handleAdd} itemText={Text} rating={rating} handleRating={handleRating} handleText={handleText}/>
<MoviesList data={list.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())&&el.rating>=rating)} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
  );
}

export default App;
