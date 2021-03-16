import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log('Mouse event');
        setX(e.clientX);
        setY(e.clientY);
    }

    // COMPONENT DID MOUNT EXAMPLE
    // UseEffect is called after every render, unless you specify the dependency array.
    // For us, we dont want the effect to depend on anything, we want it to be called once on initial render only.
    // The way we achieve that is by simply specifying an empty array to the useEffect as the second parameter
    // We are basically telling react, this particular effect does not depend on any props or state.
    // So there is no reason for you to call this particular effect on Re-renders.
    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove',logMousePosition);

        // So from this arrow function passed to useEffect, we return another clean up function
        // When you want to excute some component clean up code, you include it in a function and 
        // return that function from the function passed to useEffect.
        // The clean up code can be cancelling subscription, timers, removing eventhandlers as just seen
        return () => {
            console.log('Component unmounting code');
            window.removeEventListener('mousemove', logMousePosition);
        }
    },[]);

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
