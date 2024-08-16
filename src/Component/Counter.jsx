import React, { useState } from 'react'

function Counter() {
    const[count,setcount] = useState(0)
    function handleincrement(){
        setcount(count + 1)
    }
    function handledecrement(){
        setcount(count - 1)
    }
    return (
        <div className='counter'>
            <h1>Counter App</h1>
            <b>{count}</b>
            <br />
            <div className="row">
            <button onClick={handleincrement} id='green'>Increment</button>
            
            <button onClick={handledecrement} id='red'>Decrement</button>
            </div>
        </div>
    )
}

export default Counter
