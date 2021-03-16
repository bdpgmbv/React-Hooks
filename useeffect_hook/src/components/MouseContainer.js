import React, {useState} from 'react'
import HookMouse from './HookMouse';

function MouseContainer() {
    const [display, setDisplay] = useState(true);
    // Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function. at HookMouse 
    // Mouse Event is still being logged, so even though the component has been removed the event listener which belongs to that component is still listening and excuting.
    // This is what the warning tells us, hey you have unmounted the component, but when you move the mouse around you are asking me to update state variables for x and y coordinates.
    // Only problem is, that component has been unmounted. when you unmount a component  make sure you cancel all your subscriptions and listeners.
    // In other words, clean up after your component. 
    
    // ANSWER: the solution is pretty simple: the function that is passed to useEffect can return a function which will be excuted when a component will unmount.
    // So whatever you return is basically your clean up function
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
            {display && <HookMouse />}
        </div>
    )
}

export default MouseContainer
