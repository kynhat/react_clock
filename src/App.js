import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Body from './component/body';
import Footer from './component/footer';
import Clock from './component/Clock';
function App() {
  return (
    <div className="App">
      <Clock />
    </div>
  );
}
export default App;