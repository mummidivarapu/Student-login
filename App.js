import './App.css';
import Signup from "./components/signup";
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
function App() {
  return (
    <div className="App">
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home/> }></Route>
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
