import { FaDiscord } from "react-icons/fa"

export default function Midpg(){
    return(
      <div className="relative z-10 w-full grid items-start lg:items-center px-5 md:px-8 lg:px-10 xl:px-20 py-6 lg:py-0 lg:h-[280px]">
        
        {/* DESKTOP - Horizontal */}
        <p className="hidden md:block lg:block text-black font-black leading-[0.85] tracking-tighter
          md:text-[100px]
          md:mt-[-45px]
          md:ml-[-10px]
          lg:text-[160px] 
          xl:text-[200px]
          lg:pt-25
          lg:ml-[-40px]
        ">
          ORION
        </p>

        {/* MOBILE - Vertical */}
        <p className=" pt-50 md:hidden lg:hidden text-black font-black leading-[0.85] tracking-tighter flex flex-col text-[78px] sm:text-[75px]">
          <span>O</span>
          <span>R</span>
          <span>I</span>
          <span>O</span>
          <span>N</span>
        </p>

{/* for text */}
        <div className="pt-6 w-80 grid " >
            <p>
            Where Legends are formed. Rivals are conquered. Every move tells a story. Your next adventure starts here
            </p>
            <div className="flex pt-2 ml-[-20px]">
                <button className="bg-rose-100 flex  md:flex lg:flex items-center rounded-full border border-black/20 backdrop-blur-sm overflow-hidden ml-4">
                    <span className="px-6 py-2 md:text-[6px] text-[11px] xl:text-[12px] uppercase tracking-widest">Discover</span>
                    <span className="w-[42px] h-[32px] grid place-items-center border-l border-black/20 text-[12px]">••</span>
                </button>
                <button className=" md:hidden lg:hidden  flex md:flex lg:flex items-center rounded-full border border-black/20 bg-white/70 backdrop-blur-sm overflow-hidden ml-4">
                    <span className="px-6 py-2 md:text-[6px] text-[11px] xl:text-[12px] uppercase tracking-widest">Games</span>
                    <span className="w-[42px] h-[32px] grid place-items-center border-l border-black/20 text-[12px]">••</span>
                </button>
                <button className=" hidden  flex md:flex lg:flex items-center rounded-full border border-rose-300 bg-rose-50 backdrop-blur-sm overflow-hidden ml-4">
                    <FaDiscord className="p-1  w-8 text-black hover:text-indigo-400 transition-colors"/>
                    
                </button>
                <p className=" hidden text-[9px] pl-2 mt-[8px] lg:text-[15px]" >Connect with us.</p>
            </div>
        </div>

      </div>
    )
}