import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../App';

// UseContext returns a context value
// Lets assign a function call to a variable.

function ComponentE() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    
    return (
        <div>
            {user} - {channel}
        </div>
    )
}

export default ComponentE
