import React from 'react';
import './App.css';
import Nav from './components/navbar';
import image11 from './assets/image11.jpeg';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="bg-white min-h-screen">
        <div className="flex space-x-2 my-20">
          <div>
            <h1 className="text-5xl">Innovating excellence</h1>
          </div>
          <div>
            <img src={image11} alt="Description of Image 11" className="w-full" />
          </div>
        </div>
        <div className='bg-blue-950'>
        <div className='border border-white p-4 mt-4 flex flex-col justify-start h-64'>
            <h4 className='text-white text-2xl'>About me</h4>
          </div> 
          <div className='border border-white p-4 mt-4 flex flex-col justify-start h-64'>
            <h4 className='text-white text-2xl'>Services</h4>
          </div> 
          <div className='border border-white p-4 mt-4 flex flex-col justify-start h-64'>
            <h4 className='text-white text-2xl'>Previous Projects</h4>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
