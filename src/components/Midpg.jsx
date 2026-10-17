import { FaDiscord } from "react-icons/fa"

export default function Midpg(){
    return(
      <div className="relative z-10 w-full grid items-start lg:items-center px-5 md:px-8 lg:px-16 py-6 lg:py-0 md:h-[380px] lg:h-[520px]">
        
        {/* DESKTOP - MD + LG ONLY */}
        <p className="hidden md:block text-[#ca5a67] font-black leading-[0.85] tracking-tighter
          md:text-[110px] md:mt-[-20px] md:ml-[-10px]
          lg:text-[180px] lg:mt-0 lg:ml-[-20px]
        ">
          ORION
        </p>

        {/* MOBILE - UNTOUCHED, YOU LIKE IT */}
        <div className="mt-90  md:hidden w-full flex flex-col pt-10 pb-19">
          <p className="text-[#ca5a67] font-black leading-[0.85] tracking-tighter text-[19vw] sm:text-[18vw]">
            ORION
          </p>

          <div className="mt-6 w-full max-w-[340px] grid gap-5">
              <p className="text-[14px]  leading-[1.5] text-stone-400 mix-blend-difference">
              Where Legends are formed. Rivals are conquered. Every move tells a story. Your next adventure starts here
              </p>
              
              <div className="flex flex-wrap items-center gap-3">
                  <button className="bg-rose-100 flex items-center rounded-full border border-black/20 backdrop-blur-sm overflow-hidden">
                      <span className="px-6 py-2.5 text-[11px] uppercase tracking-widest">Discover</span>
                      <span className="w-[42px] h-[34px] grid place-items-center border-l border-black/20 text-[12px]">••</span>
                  </button>

                  <button className="hidden md:flex items-center rounded-full border border-black/20 bg-white/70 backdrop-blur-sm overflow-hidden">
                      <span className="px-6 py-2.5 text-[11px] uppercase tracking-widest">Games</span>
                      <span className="w-[42px] h-[34px] grid place-items-center border-l border-black/20">••</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <button className="flex items-center justify-center rounded-full border border-rose-300 bg-rose-50 w-[38px] h-[38px]">
                        <FaDiscord className="w-5 h-5 text-black"/>
                    </button>
                    <p className="text-rose-100 text-[11px]">Connect with us.</p>
                  </div>
              </div>
          </div>
        </div>

        {/* DESKTOP TEXT - MD + LG ONLY */}
        <div className="hidden md:grid w-full md:w-[360px] lg:w-[440px] md:mt-[-120px] lg:mt-[-40px]">
            <p className=" text-stone-400 text-[14px] lg:text-[16px] leading-[1.5] ">
            Where Legends are formed. Rivals are conquered. Every move tells a story. Your next adventure starts here
            </p>
            <div className="flex pt-4 lg:pt-6 items-center">
                <button className="bg-rose-100 flex items-center rounded-full border border-black/20 backdrop-blur-sm overflow-hidden">
                    <span className="px-6 py-2 text-[11px] lg:text-[13px] uppercase tracking-widest">Discover</span>
                    <span className="w-[42px] h-[32px] lg:w-[48px] lg:h-[36px] grid place-items-center border-l border-black/20 text-[12px]">••</span>
                </button>
                <button className="flex items-center rounded-full border border-rose-300 bg-rose-50 backdrop-blur-sm overflow-hidden ml-3">
                    <FaDiscord className="p-1 w-8 h-8 text-black"/>
                </button>
                <p className=" lg:block text-[12px] pl-3 mt-1 md:mt-[-5px]">Connect with us.</p>
            </div>
        </div>
      </div>
    )
}