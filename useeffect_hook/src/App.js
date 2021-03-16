import './App.css';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';

function App() {
  return (
    <div className="App">
      <HookCounterOne/>
      <HookMouse />
      <MouseContainer />
      <IntervalHookCounter />
    </div>
  );
}

export default App;
