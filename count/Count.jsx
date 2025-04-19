
import React from 'react'

export  function Count({count,increment,decrement}) {
  return (
    <div>
         <h1>{count}</h1>
        <button onClick={increment}>increas</button>
     <button onClick={decrement}>decreas</button>
    
    </div>
  )
}
