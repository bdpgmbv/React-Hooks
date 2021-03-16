import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0);
    const tick = () => {
        // setCount(count + 1);
        // 1. Since setCount keeps track of previous count value
        // we dont have to specify count as the dependency for this particular effect
        setCount(prevCount => prevCount + 1);
    }

    let someProp = "";
    useEffect(() => {
        // 2. Sometimes you might want to call a function within useEffect
        // Call the function within useEffect.
        // When you do this, you look at the useEffect and its very easy to forget "someProp" is a dependency.
        // "someProp" is used in "doSomething which is called in useEffect"
        // So what is recommended is whenever you need to call a function within useEffect, just go ahead and define a function within useEffect.
        // This way, when you read through the effect you are much more likely to see you have a prop which has to be specified as a dependency. 
        function doSomething() {
            console.log(someProp);
        }

        doSomething();
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        }
        // }, [count])
    }, [someProp])

    // 3. multiple useEffect calls
    // So if you have multiple effects to run, 
    // make sure you seperate them out rather than having all your code in single useEffect.
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
