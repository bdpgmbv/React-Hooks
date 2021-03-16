import './App.css';
import CounterOne from './components/CounterOne';
import CounterThree from './components/CounterThree';
import CounterTwo from './components/CounterTwo';

function App() {
  return (
    <div className="App">
      <CounterOne/>
      <CounterTwo/>
      <div>
        <CounterThree/>
      </div>
    </div>
  );
}

export default App;
