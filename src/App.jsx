import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Yacht from './pages/yacht';
import About from './pages/about';
import YachtDetail from "./pages/yachtDetail";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> tu menú */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yacht" element={<Yacht />} />
        <Route path="/yate/:id" element={<YachtDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
