import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adminpage from './pages/Adminpage';
import Createpost from './pages/Createpost';
import Editpost from './pages/Editpost';
import { useSelector } from 'react-redux';
import Error404 from './pages/Error404';

function App() {

  const userActive = useSelector((state)=> state.auth.user)


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/dashboard' element={ userActive &&  localStorage.getItem('token') ? <Adminpage/> : <Homepage/>  } />
          <Route path={'/create'} element={ userActive &&  localStorage.getItem('token') ? <Createpost /> : <Error404/> } />
          <Route path={'/editpost/:id'} element={userActive &&  localStorage.getItem('token') ? <Editpost /> :<Error404/> } />
          <Route path={'/*'} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
