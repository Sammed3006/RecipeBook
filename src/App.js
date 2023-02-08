import './App.css';
import { Route, Routes } from 'react-router-dom';
import Saved from './components/Saved';
import Profile from './components/Profile';
import Login from './components/Login';
import SignIn from './components/SignIn';
import Home from './components/Home';




function App() {

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signin" element={<SignIn/>} />
        </Routes>
       
      </div>
    </>
  );
}

export default App;
