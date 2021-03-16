import './App.css';
import React from 'react';
import ComponentC from './component/ComponentC';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Vyshali'}>
        <ChannelContext.Provider value={'CodingReactHooks'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
