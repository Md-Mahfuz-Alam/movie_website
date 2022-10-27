import logo from './logo.svg';
import './App.css';
import { Routes,
Route } from 'react-router-dom';
import Home from './Home';
import SingleMovie from './SingleMovie';
import Error from './Error';


function App() {
  document.title='MFlix '
  return (
   <>
  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movie/:id' element={<SingleMovie/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    
   </>
  );
}

export default App;
