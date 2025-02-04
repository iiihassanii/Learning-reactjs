import Weather from "./component/Weather"
import { WiAlien } from "react-icons/wi";

const ValidPassword = () => <h1>Valid Password</h1>
const InvalidPassword = () => <h1>Invalid Password</h1>

const Password = ({isValid})=>{
  if (isValid)
    return <ValidPassword />
  else
    return <InvalidPassword />
}

function App() {

  return (<div>
      <Password isValid={true} />
      <WiAlien />
      <Weather temp={27}/>
    </div>
  )
}

export default App
