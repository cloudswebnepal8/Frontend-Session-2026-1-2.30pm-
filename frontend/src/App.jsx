import React, { useEffect, useState } from 'react'

function App() {

  // hooks are the special functions in react used for state management ,api calls ,navigations etc 
  // some popular hooks are usestate and useEffect 
  // const [state,setState]=useState(initiallstate)  count=0 initial state of count is 0


  // useeffect syntax


  const [count, setCount] = useState(0)

  useEffect(() => {
    alert("Count value changed ..");
    console.log("count value changed " + count)

  }, [count])    //dependency array is emply which means our side effect runs only once
  return (
    <div className='flex min-h-screen justify-center items-center flex-col'>
      <h1 className='text-xl text-green-400 p-2 font-bold '>Count : {count}</h1>
      <button className='bg-green-500 text-white p-2 m-2 hover:scale-105 transition duration-700' onClick={() => {
        setCount(count + 1);
      }
      }>Increase</button>

      <button className='bg-green-500 text-white p-2 hover:scale-105 transition duration-700' onClick={() => {
        setCount(count - 1)
      }
      }>Decrease</button>
    </div>
  )
}
export default App