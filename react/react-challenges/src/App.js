import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import FlexPage from './components/FlexPage';
import ZenosParadox from './components/ZenosParadox';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="p-4 bg-black h-[100vh]">
      <h1 className='font-semibold text-xl justify-self-center mb-10 text-white'>Choose the aplication:</h1>
      <div className='flex gap-10 flex-col lg:flex-row'>
        <button className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 hover:italic focus:ring-blue-400 focus:ring-opacity-75 transition duration-200 ease-in-out" onClick={() => navigate('/flex')}>
          Flex Page
        </button>
        <button className="w-full px-4 py-2 font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-700 hover:italic focus:ring-red-400 focus:ring-opacity-75 transition duration-200 ease-in-out" onClick={() => navigate('/zenos-paradox')}>
          Zeno's Paradox of Achilles and the Tortoise
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flex" element={<FlexPage />} />
        <Route path="/zenos-paradox" element={<ZenosParadox />} />
      </Routes>
    </Router>
  );
}

export default App;
