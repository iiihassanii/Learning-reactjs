import { useState } from "react"


const Friends = () =>{
  const [friends, setFriends] = useState(["Ola", "Khalid", "Ahmed"]);

  const addAfriend = ()=> setFriends([...friends, "Hassan"]);


  return (
    <div>
      {friends.map(f=>(
        <li key={Math.random()}>{f} </li>
      ))}

      <button onClick={addAfriend}>Add a friend</button>
    </div>
  )
}


const Movie = ()=>{
  const [movie,setMovie] = useState({
    Movie : "Me and You",
    rate: 5,
  })

  const changeRate = ()=>{
    let copy = {
      ...movie,
      rate: 7
    }

    setMovie(copy)
  }
  return(
    <div>
      <h1>{movie.Movie} - {movie.rate}</h1>
      <button onClick={changeRate}>Change</button>
    </div>
  )
}

function App() {
  const [count, setCounter] = useState(0);
  const increment = ()=>  setCounter(count+1);
  const dencrement = ()=>  setCounter(count-1);
  
  return (
   <div>
    <h1>{count}</h1>
    <button onClick={increment}>+</button>
    <button onClick={dencrement}>-</button>

    <br />
    <Friends />
    <br />
    <Movie />
   </div>
  )
}

export default App
