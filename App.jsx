import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)
  //let counter = 5;
  const addValue = () =>{
  if(counter>=20){
    return
  }
    else {counter = counter + 1;
    setCounter(counter);
    console.log("value added", counter);
  }
  }

  const removeValue = () => {
   if(counter > 0){
    counter = counter - 1;
    setCounter(counter);
    console.log("value Removed", counter)
   }

   else{
    return
   }
  }

  return (
    <>
     <h1>Count kora hocche ______ </h1> 
     <h2>Bortoman Count : {counter}</h2>

     <button
     onClick={addValue}
     >Add Value {counter}</button> <br />
     <button
     onClick={removeValue}
     >Remove Value {counter}</button>
     <p>Footer: {counter}</p>
    </>
  )
}

export default App
