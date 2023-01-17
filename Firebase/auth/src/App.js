import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {lazy, Suspense, useState, useEffect} from 'react';
import './App.css'
import Header from "./pages/header/header"
import Load from './components/load/load';
import { loadLocalStrorage } from './services/getData';

// Firebase Inicio
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOhODpQCr2ZYNRINcREJGScrvd4nSOLM4",
  authDomain: "virtual-guru-342313.firebaseapp.com",
  projectId: "virtual-guru-342313",
  storageBucket: "virtual-guru-342313.appspot.com",
  messagingSenderId: "304535808408",
  appId: "1:304535808408:web:c02eb0a2c4075a4a9c63ed",
  measurementId: "G-DPHCPN62PS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig)

// Firebase Fim


const Login=lazy(()=>import('./pages/login/login'))

const Register=lazy(()=>import('./pages/register/register'))
const Notfound=lazy(()=>import('./pages/notFound/notfound'))
const Auth = lazy(()=>import('./pages/authPageTest/AuthPageTest'))



function App() {
  
 
  return (
   <Router>
    <Suspense fallback={<Load/>}>
    <Header/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        
        <Route path="/register" element={<Register/>}/>
        <Route path="/paginateste" element={<Auth/>}/>
        <Route path="*" element={<Notfound/>}/>
        
      </Routes>
    </Suspense>
   </Router>
  );
}

export default App;
