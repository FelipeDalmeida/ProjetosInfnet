import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {lazy, Suspense} from 'react';
import './App.css'
import Load from './Components/Load/load';
import Header from './Pages/Header/header';
// import Home from './Pages/Home/home';
// import Financeira from './Pages/Financeira/financeira';
// import Habilidades from './Pages/Habilidades/habilidades';

const Home=lazy(()=>import('./Pages/Home/home'))
const Financeira=lazy(()=>import('./Pages/Financeira/financeira'))
function App() {
  return (
   <Router>
    <Suspense fallback={<Load/>}>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Financeira" element={<Financeira/>}/>
      </Routes>
    </Suspense>
   </Router>
  );
}

export default App;
