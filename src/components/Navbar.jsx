import { useState } from "react"

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return(
    <header className="relative w-full h-[90px] xl:h-[96px] 2xl:h-[110px] px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-32 flex justify-between items-center bg-blend-lighten border-t border-black/5 z-20">
      <nav className="hidden md:flex items-center gap-6 xl:gap-10 2xl:gap-14 text-[11px] xl:text-[13px] 2xl:text-[14px] uppercase tracking-widest text-black">
        <button className="hover:opacity-60">WORK</button>
        <a href="/about" className="hover:opacity-60">About</a>
        <a href="/services" className="hover:opacity-60">Services</a>
        <a href="/clients" className="hover:opacity-60">Clients</a>
      </nav>

      <button className="hidden md:flex items-center rounded-full border border-black/20 bg-white/70 backdrop-blur-sm overflow-hidden ml-4">
        <span className="px-6 xl:px-8 py-2 text-[11px] xl:text-[13px] 2xl:text-[14px] uppercase tracking-widest">Games</span>
        <span className="w-[42px] xl:w-[48px] h-[32px] xl:h-[38px] grid place-items-center border-l border-black/20 text-[12px]">••</span>
      </button>

      <button onClick={()=>setOpen(!open)} className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5">
        <span className={`w-full h-[1px] bg-black transition ${open? "rotate-45 translate-y-[2.5px]" : ""}`}></span>
        <span className={`w-full h-[1px] bg-black transition ${open? "-rotate-45 -translate-y-[2.5px]" : ""}`}></span>
      </button>

      {open && (
        <div className="absolute top-[90px] left-0 w-full bg-white p-5 flex flex-col gap-4 md:hidden z-50">
          <button className="text-left text-black text-[13px] uppercase tracking-widest py-2">Work</button>
          <a href="/about" onClick={closeMenu} className="text-black text-[13px] uppercase py-2">About</a>
          <a href="/services" onClick={closeMenu} className="text-black text-[13px] uppercase py-2">Services</a>
          <a href="/clients" onClick={closeMenu} className="text-black text-[13px] uppercase py-2">Clients</a>
        </div>
      )}
    </header>
  )
}