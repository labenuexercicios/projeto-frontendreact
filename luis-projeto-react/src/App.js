import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';


// const StyledButton = styled.button`
//   background-color: #007bff; 
//   color: #fff; 
//   padding: 10px 20px;
//   border: none; 
//   border-radius: 5px;   
//   cursor: pointer; 
//   &:hover {
//     background-color: #0056b3; 
//   }
// `;

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
        {/* <StyledButton>Olha eu aqui!</StyledButton> */}
      </header>
    </div>
  );
}

export default App;
