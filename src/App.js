import React from 'react';
import './App.css';
import Nav from './components/navbar';
import image11 from './assets/image11.jpeg';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="bg-white h-screen">
        <div className="flex items-center justify-center space-x-2 my-20 w-screen  ">
          <div>
            <h1 className="text-8xl">Innovating excellence</h1>
          </div>
          <div>
            <img src={image11} alt="Description of Image 11" className="w-" />
          </div>
        </div>
        <div className=' bg-blue-950'>
        <h3 className=' text-white font-bold text-2xl h-52'> About Me</h3>
        <h4 className=' text-white text-2xl h-64'> Services</h4>
        <h4 className='  text-white text-2xl h-64'>Previous Projects</h4>

        <h5 className=' text-white text-2xl h-64'> Contacts</h5>
        </div>

      </div>
    </div>
  );
}

export default App;
