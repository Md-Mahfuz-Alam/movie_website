import logo from './logo.svg';
import './App.css';
import { Routes,
Route } from 'react-router-dom';
import Home from './Home';
import SingleMovie from './SingleMovie';
import Error from './Error';
import Heading from './Heading';


function App() {
  document.title='MahFlix '
  return (
   <>
  {/* <Heading/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movie/:id' element={<SingleMovie/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    
   </>
  );
}

export default App;
