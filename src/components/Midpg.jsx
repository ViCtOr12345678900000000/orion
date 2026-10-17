import { FaDiscord } from "react-icons/fa"

export default function Midpg(){
    return(
      <div className="relative z-10 w-full grid items-start lg:items-center px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-32 py-6 lg:py-0 lg:h-[340px] xl:h-[520px] 2xl:h-[680px]">
        
        {/* DESKTOP */}
        <p className="hidden md:block text-black font-black leading-[0.85] tracking-tighter
          md:text-[100px] md:mt-[-45px] md:ml-[-10px]
          lg:text-[160px] lg:pt-24 lg:ml-[-40px]
          xl:text-[220px] xl:ml-[-20px] xl:pt-28
          2xl:text-[300px] 2xl:ml-[-30px]
        ">
          ORION
        </p>

        {/* MOBILE */}
        <p className="pt-48 md:hidden text-black font-black leading-[0.85] tracking-tighter flex flex-col text-[78px] sm:text-[75px]">
          <span>O</span><span>R</span><span>I</span><span>O</span><span>N</span>
        </p>

        <div className="pt-6 xl:pt-10 w-80 xl:w-[420px] 2xl:w-[520px] grid" >
            <p className="text-[14px] xl:text-[16px] 2xl:text-[18px] leading-[1.5]">
            Where Legends are formed. Rivals are conquered. Every move tells a story. Your next adventure starts here
            </p>
            <div className="flex pt-4 xl:pt-6 ml-[-16px] items-center">
                <button className="bg-rose-100 flex items-center rounded-full border border-black/20 backdrop-blur-sm overflow-hidden">
                    <span className="px-6 py-2 text-[11px] xl:text-[13px] 2xl:text-[14px] uppercase tracking-widest">Discover</span>
                    <span className="w-[42px] h-[32px] xl:w-[48px] xl:h-[36px] grid place-items-center border-l border-black/20 text-[12px]">••</span>
                </button>
                <button className="md:hidden flex items-center rounded-full border border-black/20 bg-white/70 backdrop-blur-sm overflow-hidden ml-3">
                    <span className="px-6 py-2 text-[11px] uppercase tracking-widest">Games</span>
                    <span className="w-[42px] h-[32px] grid place-items-center border-l border-black/20">••</span>
                </button>
                <button className="hidden md:flex items-center rounded-full border border-rose-300 bg-rose-50 backdrop-blur-sm overflow-hidden ml-3">
                    <FaDiscord className="p-1 w-8 h-8 text-black"/>
                </button>
                <p className="hidden lg:block text-[10px] xl:text-[12px] 2xl:text-[13px] pl-3 mt-1">Connect with us.</p>
            </div>
        </div>
      </div>
    )
}