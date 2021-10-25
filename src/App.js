import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="logo">
        <img src={logo} alt="logo"></img>
      
        <p>
          Kitchen Net Login Admin
        </p>
      </div>

      <div className="Login"> 
        <p>Login</p>

        <div className="credenciais">
          <div>
            <label>Email:</label>
            <input></input>
          </div>

          <div>
            <label></label>
            <input></input>
          </div>
        </div>
      </div>


      <button className="botao">
      </button>

      <div className="esquecisenha">Esqueci a Senha</div>
    </div>
  );
}

export default App;
