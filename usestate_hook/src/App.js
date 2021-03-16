import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';

function App() {
  return (
    <div className="App">
      <HookCounter/>
      <HookCounterTwo/>
      <HookCounterThree/>
      <HookCounterFour />
    </div>
  );
}

export default App;
