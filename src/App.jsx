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
    <div className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col">
      {/* Girl - XL positioning */}
      <img 
        src={girlBg}
        alt="Phoenix Girl"
        className="absolute inset-0 w-full h-full z-0
        object-cover object-[68%_top] 
        md:object-contain md:object-right md:translate-x-10
        xl:object-contain xl:object-[78%_center] xl:scale-[0.92]
        2xl:object-[75%_center] 2xl:scale-[1.05]"
      />

      <BgCurves />

      <div className="relative z-10 flex-1 flex flex-col">
        <Navbar />
        <Midpg />
      </div>
      <Footer />
    </div>
  )
}
export default App;