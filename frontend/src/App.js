import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import { useEffect } from 'react';
function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/createUser' element={<CreateUser/>}></Route>
        <Route path='/updateUser/:id' element={<UpdateUser/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
