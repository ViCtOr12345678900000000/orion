// src/App.jsx
import girlBg from "./assets/game-girl.jpg";
import Navbar from "./components/Navbar";
import Midpg from "./components/Midpg";
import Footer from "./components/Footer";

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
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
      {/* Duplicate the same arc in 3 positions - little spaces between */}
      <OneArc className="top-[48%] left-[70%] -translate-x-1/2 -translate-y-1/2" r={2500} />
      <OneArc className="top-[48%] left-[70%] -translate-x-1/2 -translate-y-1/2" r={300} />
      <OneArc className="top-[48%] left-[70%] -translate-x-1/2 -translate-y-1/2" r={400} />
      <OneArc className="top-[48%] left-[70%] -translate-x-1/2 -translate-y-1/2" r={500} />
      
      
    </div>
  );
}

function App() {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      
      {/* Girl behind */}
      <img 
        src={girlBg}
        alt="Phoenix Girl"
        className="absolute inset-0 w-full h-full object-cover md:object-contain lg:object-contain xl:object-contain md:translate-x-12 lg:translate-x-48 z-0"
      />

      {/* Curves ON TOP of girl, so you can see them - not behind */}
      <BgCurves />

      <div className="relative z-10">
        <Navbar />
        <Midpg />
      </div>
      <Footer />
    </div>
  )
}

export default App;