import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adminpage from './pages/Adminpage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/dashboard' element={<Adminpage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
