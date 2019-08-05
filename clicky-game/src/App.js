import React from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import Footer from './components/Footer'
import ImageCard from "./components/ImageCard"
import './App.css';

function App() {
  return (
    <div className = "container">
    <Header />
    <ImageCard />
    <Footer />
    </div>
  )
}

export default App;
