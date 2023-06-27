import Navbar from './Components/Common/Navbar';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Template1 from './Components/Template1/Template1';
import Template2 from './Components/Template2/Template2';

function App() {
  return (
   <>
   <Navbar/>
   <Router>
    <Routes>
   <Route path="" element={<Home/>}/>  
  <Route path="template1" element={<Template1/>}/>
  <Route path="template2" element={<Template2/>}/>
  </Routes>
   </Router>
   </>
  );
}

export default App;
