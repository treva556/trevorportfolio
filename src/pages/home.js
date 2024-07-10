

import React from 'react';
import '../App.css';
import image11 from '../assets/image11.jpeg';
import Nav from '../components/navbar';

function Body() {
  return (
    <div className="App">
      <Nav />
      <header className="bg-green-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Leading the way to a greener future</h1>
          <p className="mt-4 text-lg">Ecology is the scientific study of the relationships between organisms and their environment, including their physical, chemical.</p>
          <div className="mt-8 flex justify-center space-x-4">
            <button className="bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded">Join Us Now</button>
            <button className="bg-white text-green-700 hover:text-green-600 py-2 px-4 rounded">Get Started</button>
          </div>
        </div>
      </header>
      <section className="bg-white py-20">
        <div className="container mx-auto flex flex-col items-center">
          <h3 className="text-3xl font-bold mb-8">About Us</h3>
          <div className="flex flex-col md:flex-row md:space-x-4 items-center">
            <img src={image11} alt="Description of Image 11" className=" w-32 md:w-1/2 rounded-lg shadow-lg mb-8 md:mb-0" />
            <div className="md:w-1/2">
              <h4 className="text-2xl font-bold mb-4">Building a greener future together forever</h4>
              <p className="text-lg mb-4">Ecology is the scientific study of the relationships between organisms and their environment, including their physical, chemical.</p>
              <ul className="list-disc list-inside">
                <li>Know what your target market wants and needs</li>
                <li>A whole lot of digital love for less</li>
                <li>Problem solving</li>
              </ul>
              <div className="mt-4">
                <span className="block font-bold">Problem Solving: 80%</span>
                <span className="block font-bold">Agronomist: Leslie Alexander</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-950 text-white py-20">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Our Services</h3>
          <div className="flex flex-wrap justify-center space-x-4">
            <div className="border border-white p-4 m-4 w-1/3">
              <h4 className="text-2xl font-bold mb-4">Carbon Offsetting</h4>
              <p>This allows individuals and organizations to support their efforts to combat carbon climate change.</p>
            </div>
            <div className="border border-white p-4 m-4 w-1/3">
              <h4 className="text-2xl font-bold mb-4">Energy Consulting</h4>
              <p>Energy consulting involves providing expert advice and guidance on energy-related matters.</p>
            </div>
            <div className="border border-white p-4 m-4 w-1/3">
              <h4 className="text-2xl font-bold mb-4">Climate Adaptation</h4>
              <p>Refers to the adaptation processes of human and natural systems in response to the impacts.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;


////