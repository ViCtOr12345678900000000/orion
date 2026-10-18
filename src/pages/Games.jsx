const pallet = [
    {
        id:1,
        name:'Ranked',
        img:[],
        status:'12.4k players live',
        game:'crimson dome',
        info:'high-gravity dome / vertical meta',
        rank:'meta rank S',
        size:' 8 player lobby',
    },
    {
        id:2,
        name:'tournament',
        prize:'prize $50k',
        img:[],
        status:'prize pool $50k',
        game:'neon abyss',
        info:'deep field arena / light bending',
        rank:'meta rank S',
        size:' 8 player lobby',
    },
    {
        id:3,
        name:'1v1 duel',
        img:[],
        status:'1.2k duel live',
        game:'void coliseum',
        info:'zero athmosphere doom sanctum',
        rank:'meta rank S',
        size:' 8 player lobby',
    },
]

export default function Games(){
    return(
        <div className="pt-5 p-5 w-full grid grid-cols-1 md:grid-cols-3 gap-6 isolate">
            {pallet.map((data) =>(
                <div key={data.id} className="w-full bg-white rounded-[28px] overflow-hidden border border-black/5 shadow-sm font-sans">
                    
                    <div className="relative h-[380px] bg-gradient-to-br from-[#d68a8a] via-[#e58aad] to-[#2a1a22] p-4 overflow-hidden">
                        {/* Top badges - removed z-10 */}
                        <div className="relative flex justify-between items-center">
                            <span className="flex items-center gap-1.5 bg-white text-black text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#d68a8a]"></span> {data.name}
                            </span>
                            <span className="flex items-center gap-1.5 bg-black/20 backdrop-blur text-white text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> {data.status}
                            </span>
                        </div>
                    </div>

                    <div className="p-5 flex items-end justify-between">
                        <div>
                            <h2 className="text-[20px] tracking-wide text-black uppercase">{data.game}</h2>
                            <p className="text-[10px] tracking-[0.15em] text-black/30 uppercase mt-1">
                                {data.info}
                            </p>
                            <p className="flex items-center gap-1.5 text-[10px] tracking-widest text-black/30 uppercase mt-3">
                                <span className="w-3 h-3 rounded-full border border-black/20 flex items-center justify-center">
                                    <span className="w-1 h-1 rounded-full bg-black/30"></span>
                                </span>
                                {data.rank} • {data.size}
                            </p>
                        </div>

                        <button className="flex items-center gap-2 bg-black text-white rounded-full pl-5 pr-1 py-1 text-[12px] tracking-widest uppercase">
                            ENTER
                            <span className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-[10px]">•••</span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}