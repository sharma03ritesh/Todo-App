import './App.css';
import React, {useState} from 'react';
import TodoLogin from './components/TodoLogin';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
let username = "Ritesh";
let password = "Test@123";

function App() {
  
  const [Loggedin, setLoggedin] = useState(Boolean);
  return (
    <>    

    <div className="App">
      <header className="App-header">
          {Loggedin === false ? <TodoLogin userid = {username} passwd = {password} username = "Username" password = "Password" Loggedin = {Loggedin} setLoggedin = {setLoggedin}/> : <TodoList User = {username} Loggedin = {Loggedin} setLoggedin = {setLoggedin} />}
          
      </header>
    </div>
    </>
  );
}

export default App;
