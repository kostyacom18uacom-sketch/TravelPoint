const chips = ['Усе', 'Музика', 'Подкасти']

export default function TopChips() {
  return (
    <div className="flex items-center gap-2 px-4 pt-4 pb-2">
      {/* Avatar */}
      <div className="w-8 h-8 rounded-full bg-[#c13584] flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
        K
      </div>

      {/* Filter chips */}
      {chips.map((chip) => (
        <button
          key={chip}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold leading-tight transition-colors ${
            chip === 'Усе'
              ? 'bg-[#1ed760] text-black'
              : 'bg-[#2a2a2a] text-white'
          }`}
        >
          {chip}
        </button>
      ))}
    </div>
  )
}
