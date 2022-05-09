import React from 'react';
import { Route, Routes } from 'react-router';
import Coin from './components/Coin';
import Home from './components/Home';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/coin/:id" element={<Coin />} />
      </Routes>
    </>
  );
}

export default App;
