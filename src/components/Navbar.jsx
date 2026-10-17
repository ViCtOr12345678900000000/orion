import { useState } from "react"

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return(
    <header className="relative w-full h-[90px] xl:h-[70px] px-5 md:px-8 lg:px-10 xl:px-20 flex justify-between items-center bg-blend-lighten border-t border-black/5">
      

      <nav className="hidden md:flex items-center  gap-6 xl:gap-8 text-[11px] xl:text-[12px] uppercase tracking-widest text-black">
        <button className="hover:opacity-60">WORK</button>
        <a href="/about" className="hover:opacity-60">About</a>
        <a href="/services" className="hover:opacity-60">Services</a>
        <a href="/clients" className="hover:opacity-60">Clients</a>

       
      </nav>
 {/* GAMES button - only lg and xl */}
        <button className="  hidden md:flex lg:flex items-center rounded-full border border-black/20 bg-white/70 backdrop-blur-sm overflow-hidden ml-4">
          <span className="px-6 py-2 md:text-[6px] text-[11px] xl:text-[12px] uppercase tracking-widest">Games</span>
          <span className="w-[42px] h-[32px] grid place-items-center border-l border-black/20 text-[12px]">••</span>
        </button>


      <button onClick={()=>setOpen(!open)} className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5">
        <span className={`w-full h-[1px] bg-black transition ${open? "rotate-45 translate-y-[2.5px]" : ""}`}></span>
        <span className={`w-full h-[1px] bg-black transition ${open? "-rotate-45 -translate-y-[2.5px]" : ""}`}></span>
      </button>

      {open && (
        <div className="absolute top-[90px] left-0 w-full bg-blend-lighten p-5 flex flex-col gap-4 md:hidden">
          <button className="text-left text-black text-[13px] uppercase tracking-widest py-2">Work</button>
          <a href="/about" onClick={closeMenu} className="text-black text-[13px] uppercase py-2">About</a>
          <a href="/services" onClick={closeMenu} className="text-black text-[13px] uppercase py-2">Services</a>
          <a href="/clients" onClick={closeMenu} className=" text-black text-[13px] uppercase py-2">Clients</a>
        </div>
      )}
    </header>
  )
}