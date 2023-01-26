import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Chat from './components/Chat';
import { useState } from 'react';

function App(props) {
  const [showLogin, setShowLogin] = useState(true);
  const [showChat, setShowChat] = useState(false);
  
  return (
    <div className="App">
      {showLogin && <Login />}
      {showChat && <Chat username={props.username}/>}
    </div>
  );
}

export default App;
