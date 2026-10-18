// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import girlBg from "./assets/game-girl.jpg";
import Navbar from "./components/Navbar";
import Midpg from "./components/Midpg";
import Footer from "./components/Footer";
import Arena from "./pages/Arena"; 

function OneArc({ className = "", r = 420 }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="900" height="900" viewBox="0 0 900 900" className="overflow-visible">
        <circle cx="450" cy="450" r={r} fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      </svg>
    </div>
  )
}

function BgCurves() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <OneArc className="top-[48%] left-[70%] -translate-x-1/2 -translate-y-1/2" r={2500} />
      <OneArc className="top-[48%] left-[70%] -translate-x-1/2 -translate-y-1/2" r={300} />
      <OneArc className="top-[48%] left-[70%] -translate-x-1/2 -translate-y-1/2" r={400} />
      <OneArc className="top-[48%] left-[70%] -translate-x-1/2 -translate-y-1/2" r={500} />
    </div>
  );
}

function Home() {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col isolate">
      <img 
        src={girlBg}
        alt="Phoenix Girl"
        className="fixed inset-0 w-full h-full z-0 object-cover object-[68%_top] md:object-contain md:object-[78%_center] md:translate-x-10 lg:scale-[0.92]"
      />
      <BgCurves />
      
      {/* NAVBAR ALWAYS ON TOP */}
      <div className="relative z-50">
        <Navbar />
      </div>

      <div className="relative z-10 flex-1 flex flex-col">
        <Midpg />
      </div>
      
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arena" element={<Arena />} />
      </Routes>
    </Router>
  )
}

export default App;