import Person from "./component/Person"
import Product from "./component/Product"

function App() {
  return <div>


    <Person name="Hassan" age={22} />

    <br />
    <Product name="Laptop" price="2500" />
    <br />    
    <User 
  name="Hassan"
  age={22}
  /></div>
}



const User = (props)=>{
  return (
    <section>
      <h1>Name: { props.name }</h1>
      <h1>age: { props.age }</h1>
    </section>
  )
}


export default App
