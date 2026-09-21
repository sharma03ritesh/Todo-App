import './App.css';
import React, {useState} from 'react';
import TodoLogin from './components/TodoLogin';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
let username = "Ritesh";
let password = "Test@123";

function App() {
  
  const [Loggedin, setLoggedin] = useState(Boolean);
  const [usernameCopied, setUsernameCopied] = useState(false);
  const [passwordCopied, setPasswordCopied] = useState(false);
  const handleCopy = async (textToCopy, type) => {
    try {
      await navigator.clipboard.writeText(textToCopy);

      if (type === "username") {
        setUsernameCopied(true);

        setTimeout(() => {
          setUsernameCopied(false);
        }, 2000);
      }

      if (type === "password") {
        setPasswordCopied(true);

        setTimeout(() => {
          setPasswordCopied(false);
        }, 2000);
      }
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <>    

    <div className="App">
      <header className="App-header">
          <p>
            use username: <code>{username}</code>{" "}
            <button
              onClick={() => handleCopy(username, "username")}
              className="btn btn-primary"
            >
              {usernameCopied ? "Copied!" : "Copy"}
            </button>
          </p>

          <p>
            use password: <code>{password}</code>{" "}
            <button
              onClick={() => handleCopy(password, "password")}
              className="btn btn-primary"
            >
              {passwordCopied ? "Copied!" : "Copy"}
            </button>
          </p>
          {Loggedin === false ? <TodoLogin userid = {username} passwd = {password} username = "Username" password = "Password" Loggedin = {Loggedin} setLoggedin = {setLoggedin}/> : <TodoList User = {username} Loggedin = {Loggedin} setLoggedin = {setLoggedin} />}
          
      </header>
    </div>
    </>
  );
}

export default App;
