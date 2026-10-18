import Navbar from "../components/Navbar";
import Bg from '../assets/ws.jpg';
import Games from "./Games";

export default function Arena(){
    return(
        <div className="relative w-full min-h-screen bg-white isolate">
            <img className="fixed inset-0 w-full h-full -z-10 object-cover object-top md:object-center" src={Bg} alt="" />
            
            {/* NAVBAR - ALWAYS ON TOP, separate */}
            <header className="sticky top-0 z-[100] w-full bg-white/80 backdrop-blur-md border-b border-black/5">
                <Navbar />
            </header>

            <div className="relative z-10 flex flex-col">
                {/* GRID WRAPPER */}
                <div className="px-5 md:px-8 lg:px-16 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">

                    {/* CONTAINER 1: Season to Squad */}
                    <div className="grid gap-3 max-w-[500px]">
                        <p className="max-w-[250px] uppercase border rounded-full text-center text-[10px] border-black/50 text-black/50 tracking-widest px-2 py-1" >
                            <span className="text-[15px] text-[#ff2d95]">• </span>
                            Season 04 - orbital decay live
                        </p>
                        
                        <h1 className="uppercase font-extrabold text-[70px] md:text-[85px] leading-[0.85] tracking-tighter">
                            <span className="block text-[#ca5a67]">Enter the</span>
                            <span 
                                className="block text-white"
                                style={{ 
                                    WebkitTextStroke: '4px black',
                                    paintOrder: 'stroke fill'
                                }}
                            >
                                arena
                            </span>
                        </h1>

                        <p className="font-mono pt-4 font-medium text-[12px] max-w-[450px] tracking-wide text-[#c44a66]"> 
                            Where legends collide. Choose your battleground, master the meta. Crimson protocols engaged. 
                        </p>

                        <div className="gap-2 flex flex-wrap max-w-80">
                            <button className="h-8 px-3 py-1 border-black/20 text-[12px] uppercase shadow-sm tracking-widest border rounded-full text-black bg-white hover:bg-black hover:text-white">all modes</button>
                            <button className="h-8 px-3 py-1 border-black/20 text-[12px] uppercase shadow-sm tracking-widest border rounded-full text-black bg-white hover:bg-black hover:text-white">Ranked</button>
                            <button className="h-8 px-3 py-1 border-black/20 text-[12px] uppercase shadow-sm tracking-widest border rounded-full text-black bg-white hover:bg-black hover:text-white">casual</button>
                            <button className="h-8 px-3 py-1 border-black/20 text-[12px] uppercase shadow-sm tracking-widest border rounded-full text-black bg-white hover:bg-black hover:text-white">Tournaments</button>
                            <button className="h-8 px-3 py-1 border-black/20 text-[12px] uppercase shadow-sm tracking-widest border rounded-full text-black bg-white hover:bg-black hover:text-white">1v1</button>
                            <button className="h-8 px-3 py-1 border-black/20 text-[12px] uppercase shadow-sm tracking-widest border rounded-full text-black bg-white hover:bg-black hover:text-white">Squad</button>
                        </div>
                    </div>

                    {/* CONTAINER 2: Arena Intel */}
                    <div className="w-full max-w-[380px] bg-white rounded-[24px] p-5 shadow-sm border border-black/5 font-sans md:ml-auto md:mb-4">
                        <div className="flex items-center justify-between mb-5">
                            <span className="text-[11px] tracking-[0.2em] text-black/40 uppercase">Arena Intel</span>
                            <span className="text-[10px] tracking-widest uppercase bg-[#ffe3ea] text-[#c44a66] px-3 py-1 rounded-full">
                                Live Feed
                            </span>
                        </div>

                        <div className="space-y-3 text-[14px]">
                            <div className="flex justify-between">
                                <span className="text-black/40">Queue time</span>
                                <span className="font-medium text-black">~42 sec avg</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-black/40">Top squad</span>
                                <span className="font-medium text-black">NOVA-9 • 84% WR</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-black/40">Map rotation</span>
                                <span className="font-medium text-black">CRIMSON → ABYSS → VOID</span>
                            </div>
                        </div>

                        <div className="mt-5 pt-4 border-t border-black/10 flex items-center gap-2">
                            <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full bg-black border-2 border-white"></div>
                                <div className="w-6 h-6 rounded-full bg-black border-2 border-white"></div>
                                <div className="w-6 h-6 rounded-full bg-black border-2 border-white"></div>
                            </div>
                            <span className="text-[12px] text-black/50">+12.4k in arena now</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 col-span-1 md:col-span-2">
                        <div className="w-16 h-px bg-black/10"></div>
                        <span className="text-[11px] tracking-widest uppercase text-[#c44a66]">
                            3 ACTIVE ARENAS / 18.8K ONLINE — VIEW: ARENA
                        </span>
                    </div>
                </div>
                    
                <Games />
            </div>
       </div>
    )
}