const Greeting = () => {
  const greet = "Hello there";
  const date = new Date()

  return (
    <div>
      <h1>{greet}</h1>
      <p>date now = {date.getDate()}</p>
    </div>
  )
}

export default Greeting