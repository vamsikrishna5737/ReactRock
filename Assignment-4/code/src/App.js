import React from 'react';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import './App.css'
import LandingPage from './LandingPage/LandingPage';
import Postview from './PostView/Postview';
 
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        {/* <Link to="/land"></Link> */}
        <Routes>
            <Route path='/post' element={<Postview/>}></Route> 
            <Route path='*' element={<LandingPage/>}></Route>
            
        </Routes>
       
      </BrowserRouter>
      {/* <Postview /> */}
    </div>
  );
}
 
export default App;