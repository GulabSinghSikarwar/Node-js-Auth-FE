import logo from './logo.svg';
import './App.css';
import SignupForm from './component/SignUp/Signup';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="App">
      <Outlet />

    </div>
  );
}

export default App;
