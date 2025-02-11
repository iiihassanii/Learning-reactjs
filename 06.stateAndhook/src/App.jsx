import {  useState } from "react"
import { FaFaceKissWinkHeart } from "react-icons/fa6";
import  First  from "./components/First";
import  Second2  from "./components/Second2";
import Counter from "./components/Counter";
import Todolist from "./components/Todolist";
import Profile from "./components/Profile";
import Shoppinglist from "./components/Shoppinglist";


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

const Movieobj = () => {

  const [movie, setMovie] = useState([
    {id: 1, name: "Hassan", Age: 25},
    {id: 2, name: "Ola", Age: 24},
  ])

  const handleclick = ()=>{
    setMovie(movie.map(m=> (m.id===1 ? {...m, name: "Hassan loves Ols"} : m)))
  }

  return (
    <div>
      <ul>
        {movie.map(m => (
          <li key={m.id}>    {m.name}  {m.Age} <FaFaceKissWinkHeart /></li>
        ))}
      </ul>
        <button onClick={handleclick}>Change name</button>
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
    <br />
    <Movieobj />
    <br />
    <First count={count} onClickh={()=> setCounter(count+1)} />
    <br />
    <Second2 onClickh={()=> setCounter(count-1)} />
    
    <br />
    <br />
    <h2>Challenge</h2>
    <Counter />
    <br />
    <Todolist />
    <br />
    <Profile />
    <br />
    <Shoppinglist />

   </div>
  )
}

export default App
