import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <Chat username="dylan" />
    </div>
  );
}

export default App;
