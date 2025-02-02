const Userlist = () => {
  const userlist = [
    {
      id:"1",
      name:"Hassan",
      age:"25"
    },
    {
      id:"2",
      name:"Ola",
      age:"24"
    },
    {
      id:"3",
      name:"Stave",
      age:"33"
    }
  ]
  return (
    <div>
      {userlist.map(user=>(
        <ul key={Math.random()}>
          <li>{user.id}</li>
          <li>{user.name}</li>
          <li>{user.age}</li>
        </ul>
      ))}
    </div>
  )
}

export default Userlist