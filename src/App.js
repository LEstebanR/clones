import { Routes, Route} from 'react-router-dom';
import Home from '../src/pages/Home.jsx'
import Xp from '../src/pages/Xp.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/xp" element={<Xp/>} />
    </Routes>
  );
}

export default App;
