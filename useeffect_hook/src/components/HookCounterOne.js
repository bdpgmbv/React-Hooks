import React, { useState, useEffect } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    // [] => for conditionally executing an effect we pass a second parameter, which is an array
    // In this array we need to specify either the props or state we need to watch for. 
    // Only if those props or states specified in this array were to change, the effect will be executed 

    useEffect(() => {
        console.log("useEffect - Updating Document Title");
        document.title = `You clicked ${count} times`
    }, [count])
    
    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne
