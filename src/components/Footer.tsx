import { useState } from "react"
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaDiscord } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export default function Footer() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* DESKTOP - MD + LG ONLY */}
      <div className="hidden md:flex fixed bottom-0 left-0 w-full z-20 bg-black/90 backdrop-blur-md border-t border-white/10 h-[86px] lg:h-[96px] lg:text-[12px]">
        <div className="flex items-center gap-4 px-8 lg:px-10 w-[28%] border-r border-white/10">
          <button className="w-11 h-11 rounded-full border border-white/30 grid place-items-center">
            <span className="text-white text-[14px] ml-[2px]">▶</span>
          </button>
          <span className="text-white text-[11px] tracking-[0.18em] uppercase font-medium">Play Trailer</span>
        </div>

        <div className="flex items-start gap-4 px-6 lg:px-8 w-[27%] border-r border-white/10 pt-[20px]">
          <span className="min-w-[28px] h-[28px] rounded-full bg-white/10 grid place-items-center text-[11px] text-white border border-white/10">1</span>
          <p className="text-[8px] leading-[1.5] tracking-wide text-white/50 uppercase">
            Drop into the arena. Forge your legend, master abilities, and dominate the leaderboard.
          </p>
        </div>

        <div className="flex items-start gap-4 px-6 lg:px-8 w-[27%] border-r border-white/10 pt-[20px]">
          <span className="min-w-[28px] h-[28px] rounded-full bg-white/10 grid place-items-center text-[11px] text-white border border-white/10">2</span>
          <p className="text-[8px] leading-[1.5] tracking-wide text-white/50 uppercase">
            Squad up, loot rare skins, and rise through ranked. Your next clutch moment starts here.
          </p>
        </div>

        <div className="flex items-center justify-between px-2 lg:px-8 w-[18%] bg-gradient-to-l from-[#5a0a1a]/80 to-black/0">
          <button className="w-8 h-8 rounded-full border border-white/20 grid place-items-center text-white">→</button>
          <div className="flex items-center gap-5 text-white/80 text-[14px] md:text-[10px] lg:text-[12px]">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaXTwitter className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* MOBILE - UNTOUCHED */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-30">
        <div className="w-full h-[58px] bg-black/85 backdrop-blur-xl border-t border-white/10 flex items-center justify-between px-5">
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 rounded-full border border-white/20 grid place-items-center">
              <span className="text-white text-[12px] ml-[1px]">▶</span>
            </button>
            <span className="text-white text-[10px] tracking-[0.18em] uppercase">Play Trailer</span>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 rounded-full bg-white text-black grid place-items-center transition-transform duration-300"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            ↑
          </button>
        </div>

        <div className={`absolute bottom-[58px] left-0 w-full bg-black/80 backdrop-blur-2xl border-t border-white/10 transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-[120%] opacity-0"}`}>
          <div className="grid grid-cols-1 divide-y divide-white/10">
            <div className="flex gap-4 p-5">
              <span className="min-w-[28px] h-[28px] rounded-full bg-white/10 grid place-items-center text-[11px] text-white">1</span>
              <p className="text-[10px] leading-[1.5] text-[#ca5a67] uppercase">Drop into the arena. Forge your legend, master abilities, and climb the ranks.</p>
            </div>
            <div className="flex gap-4 p-5">
              <span className="min-w-[28px] h-[28px] rounded-full bg-white/10 grid place-items-center text-[11px] text-white">2</span>
              <p className="text-[10px] leading-[1.5] text-[#ca5a67] uppercase">Squad up, unlock legendary loot, and own every match. Victory awaits.</p>
            </div>
            <div className="p-5 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 rounded-full border border-rose-300/50 bg-rose-50/10 px-4 py-2">
                  <FaDiscord className="w-5 h-5 text-white" />
                  <span className="text-white text-[11px] uppercase tracking-widest">Discord</span>
                </button>
                <p className="text-white text-[11px] tracking-wide">Join the squad.</p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <button className="w-8 h-8 rounded-full border border-white/20 grid place-items-center text-white">→</button>
                <div className="flex items-center gap-6 text-white/70">
                  <FaFacebookF /><FaLinkedinIn /><FaInstagram /><FaXTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div onClick={() => setOpen(false)} className="md:hidden fixed inset-0 z-20 bg-black/20 backdrop-blur-[5px]"></div>
      )}
    </>
  )
}