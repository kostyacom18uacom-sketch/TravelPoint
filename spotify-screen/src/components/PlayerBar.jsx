import { Pause, MonitorSpeaker } from 'lucide-react'

export default function PlayerBar() {
  return (
    <div className="sticky bottom-[60px] left-0 right-0 mx-2 z-40">
      <div className="bg-[#1f2a1f] rounded-xl px-3 py-2 flex items-center gap-3 shadow-heavy">
        {/* Album art */}
        <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0">
          <img
            src="https://picsum.photos/seed/doechii/100/100"
            alt="What It Is"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Track info */}
        <div className="flex-1 min-w-0">
          <p className="text-white text-[13px] font-semibold truncate leading-tight">
            What It Is (Solo Version) • Doechii
          </p>
          <div className="flex items-center gap-1 mt-0.5">
            <MonitorSpeaker size={12} className="text-[#1ed760]" />
            <p className="text-[#1ed760] text-[11px] truncate">LaptopmiuKostya</p>
          </div>
        </div>

        {/* Pause button */}
        <button className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
          <Pause size={22} className="text-white fill-white" />
        </button>

        {/* Next / cast */}
        <button className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
          <MonitorSpeaker size={20} className="text-white" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="h-[2px] bg-[#4d4d4d] mx-2 mt-1 rounded-full overflow-hidden">
        <div className="h-full w-[35%] bg-[#1ed760] rounded-full" />
      </div>
    </div>
  )
}
