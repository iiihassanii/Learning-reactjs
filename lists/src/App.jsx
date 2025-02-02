import ProductList from "./components/ProductList";
import Userlist from "./components/Userlist";

function App() {
  const numbers = [1,2,3,4,5];
  const userInfo = [
    {
      username:"Hassan",
      email:"hasssan@gmail.com",
      location:"KSA"
    },
    {
      username:"Ola",
      email:"ola@gmail.com",
      location:"KSA"
    },
    {
      username:"any",
      email:"any@gmail.com",
      location:"ANY"
    }
  ]
  return (
    <div>
      <ul>
        {numbers.map(number=>(
          <li key={number}>{number}</li>
        ))}
      </ul>

      {userInfo.map(user=>(
        <ul key={Math.random()}>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.location}</li>
        </ul>
      ))}
      <br />
      <Userlist />
      <br />
      <ProductList />
    </div>
  )
}

export default App
