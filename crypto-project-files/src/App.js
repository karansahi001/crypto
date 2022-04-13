import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Coin from './components/Coin';

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
