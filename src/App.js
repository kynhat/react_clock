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
      {/* <Header/>
      <Body/>
      <Footer/> */}
      <Clock/>
   

     
    </div>
  );
}

export default App;


// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);


