import React from 'react';
import './App.css';
import Nav from './components/navbar';
import image11 from './assets/image11.jpeg';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="bg-white h-screen">
        <div className="flex items-center justify-center space-x-8 my-20">
          <div>
            <h1 className="text-8xl">Innovating excellence</h1>
          </div>
          <div>
            <img src={image11} alt="Description of Image 11" className="w-" />
          </div>
        </div>
        <h3 className=' text-2xl h-52'> About Me</h3>
        <h4 className=' text-2xl h-64'> About Me</h4>
        <h5 className=' text-2xl'> About Me</h5>


      </div>
    </div>
  );
}

export default App;
