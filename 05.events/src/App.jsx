const Botton = ()=>{
  return(
    <button onClick={
      ()=> console.log("Hola")
    }>Click</button>
  )
}


const Copy = ()=>{
  const StopCopy = ()=>{
    console.log("stop bruh this is not legal")
  }

  return (
    <p onCopy={StopCopy}>Constasd dskajdmkl k;ksdioji sdad</p>
  )
}

const Move = ()=>{
  const move = ()=>{
    alert("mouse is movvvvvinnnng")
  }
  return (
    <p onMouseMove={move}>dont move the mouse here</p>
  )
}

function App() {
  

  return (
    <div>
      <Botton />
      <Copy />
      <Move />
    </div>
  )
}

export default App
