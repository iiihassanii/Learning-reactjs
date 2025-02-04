const Weather = ({temp}) => {
  if (temp < 15){
    return (
      <div>It's cold outside!</div>
    )
  }
  else if (temp >=15 && temp <= 25){
    return ( 
      <div>It's nice outside!</div>
     ) 
  } else{
    return (
      <div>It's hot outside!</div>
    )
  }
}

export default Weather