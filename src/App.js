import logo from './logo.svg';
import './App.css';
import MyTick from './mycom/MyTick';

function App() {
  console.log("App");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MyTick />
    </div>
  );
}

export default App;
