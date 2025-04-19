import { useState } from 'react'

import './App.css'
import { Count } from '../Count'

function App() {
  const [count, setCount] = useState(0)
const increment=()=>{
  if(count<10){
  setCount(count=>count+1)
}}
const decrement=()=>{
  if(count>0){
  setCount(count=>count-1)
}}

  return (
    <>
   <Count count={count} increment={increment} decrement={decrement}/>
     </>
  )
}

export default App
