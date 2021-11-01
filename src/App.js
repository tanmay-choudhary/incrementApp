import React, { useState } from 'react';


export default function App() 
{ 
  const [count , setCount] = useState(0) ;

  function Increment(){
    setCount(

      function (prevCount){
        return prevCount+1;
      }
    )
  }

  return (

     
    <div>

      <h1>

        {count }
      </h1>
      <button onClick = {Increment}> 
        incrememnt 
      </button>
    </div>


  )

}