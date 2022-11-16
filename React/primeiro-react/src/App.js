import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './assets/css/style.css'
// import Login from './pages/login/login';
// import Home from './pages/home/home'
// import Product from './pages/product/product';
// import NotFound from './pages/notfound/notFound';
// import Register from './pages/register/register';
// import Header from './pages/header/header';
import {lazy, Suspense} from 'react';

const Login = lazy(()=> import('./pages/auth/login'));
const Home = lazy(()=> import('./pages/home/home'));
const Product = lazy(()=> import('./pages/product/product'));
const NotFound = lazy(()=> import('./pages/notfound/notFound'));
const Register = lazy(()=> import('./pages/auth/register'));
const Header = lazy(()=> import('./pages/header/header'))


function App() {
  return (

    <Router>
      
      <Header/>
      <Suspense fallback={"Carregando..."}>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
