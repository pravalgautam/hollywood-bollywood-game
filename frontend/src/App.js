import './App.css';
import { BrowserRouter , Route,Routes } from 'react-router-dom';
import Signup from "./components/Signup";
import Game from './components/Game';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Signup/>}/>

    <Route path='/login' element={<Login/>}/>
    <Route path='/game' element={<Game/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
