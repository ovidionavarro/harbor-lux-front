import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Yacht from './pages/yacht';
import About from './pages/about';
import YachtDetail from "./pages/yachtDetail";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import SocialSidebar from "./components/socialSidebar";

function App() {
  return (
     <BrowserRouter>
      <Navbar /> 
      <div className="pt-18 min-h-screen flex flex-col">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/yacht" element={<Yacht />} />
            <Route path="/yate/:id" element={<YachtDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
          {/* <SocialSidebar/> */}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
