import { useState } from "react"
import {Swords, Award, Target, Trophy } from "lucide-react";

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return(
    <header className="relative w-full h-[80px] md:h-[90px] lg:h-[96px] px-5 md:px-8 lg:px-16 flex justify-between items-center bg-blend-lighten border-t border-black/5 z-20">
      <nav className="hidden md:flex items-center gap-6 lg:gap-10 uppercase tracking-widest text-black">
        <a href="/arena" className="text-blue-100 font-extrabold text-[18px] lg:text-[20px] tracking-tighter font-sans py-2 flex">Arena <Swords className="h-8 w-8 text-stone-300 p-2 pt-[4px]" /></a>
        <a href="/quests" className="text-blue-100 font-extrabold text-[18px] lg:text-[20px] tracking-tighter font-sans py-2 flex">Quests<Award className="h-8 w-8 text-stone-300 p-2 pt-[4px]" /></a>
        <a href="/arsenal" className="text-blue-100 font-extrabold text-[18px] lg:text-[20px] tracking-tighter font-sans py-2 flex">Arsenal<Trophy className="h-8 w-8 text-stone-300 p-2 pt-[4px]" /></a>
        <a href="/squads" className="text-blue-100 font-extrabold text-[18px] lg:text-[20px] tracking-tighter font-sans py-2 flex">Squads<Target className="h-8 w-8 text-stone-300 p-2 pt-[4px]" /></a>
      </nav>

      <button className="hidden md:flex items-center rounded-full border border-black/20 bg-white/70 backdrop-blur-sm overflow-hidden ml-4">
        <span className="px-6 lg:px-8 py-2 text-[11px] lg:text-[13px] uppercase tracking-widest">Games</span>
        <span className="w-[42px] lg:w-[48px] h-[32px] lg:h-[38px] grid place-items-center border-l border-black/20 text-[12px]">••</span>
      </button>

      <button onClick={()=>setOpen(!open)} className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5">
        <span className={`w-full h-[1px] bg-black transition ${open? "rotate-45 translate-y-[2.5px]" : ""}`}></span>
        <span className={`w-full h-[1px] bg-black transition ${open? "-rotate-45 -translate-y-[2.5px]" : ""}`}></span>
      </button>

      {open && (
        <div className="text-center absolute top-[80px] left-0 w-full bg-inherit p-5 flex flex-col gap-4 md:hidden z-50">
          <a href="/arena" onClick={closeMenu} className="text-blue-100 font-extrabold text-[40px] tracking-tighter font-sans uppercase py-2 flex">Arena <Swords className="m-4 h-8 w-8 text-stone-300" /></a>
          <a href="/quests" onClick={closeMenu} className="text-blue-100 font-extrabold text-[40px] tracking-tighter font-sans uppercase py-2 flex">Quests<Award className="m-4 h-8 w-8 text-stone-300" /></a>
          <a href="/arsenal" onClick={closeMenu} className="text-blue-100 font-extrabold text-[40px] tracking-tighter font-sans uppercase py-2 flex">Arsenal<Trophy className="m-4 h-8 w-8 text-stone-300" /></a>
          <a href="/squads" onClick={closeMenu} className="text-blue-100 font-extrabold text-[40px] tracking-tighter font-sans uppercase py-2 flex">Squads<Target className="m-4 h-8 w-8 text-stone-300" /></a>
        </div>
      )}
    </header>
  )
}