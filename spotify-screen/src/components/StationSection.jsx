const stations = [
  {
    id: 1,
    name: 'GAYLE',
    desc: 'Olivia Rodrigo, Sam Smith, Meghan Trainor, Em Beih...',
    img: 'https://picsum.photos/seed/gayle/200/200',
    bg: '#1ed760',
  },
  {
    id: 2,
    name: 'Okean Elzy',
    desc: 'Okean Elzy, Скрябін, АНТИТІЛА, Iryna Bilyk,...',
    img: 'https://picsum.photos/seed/okeanelzy/200/200',
    bg: '#1ed760',
  },
  {
    id: 3,
    name: 'Glass A...',
    desc: 'Tame Im... Neighbo...',
    img: 'https://picsum.photos/seed/glassanimals/200/200',
    bg: '#9b59b6',
  },
]

function StationCard({ station }) {
  return (
    <div className="flex-shrink-0 w-[168px]">
      <div
        className="relative rounded-lg overflow-hidden mb-2"
        style={{ backgroundColor: station.bg, aspectRatio: '1' }}
      >
        {/* Spotify logo top-left */}
        <div className="absolute top-2 left-2 z-10">
          <SpotifyLogo />
        </div>

        {/* РАДІО badge */}
        <span className="absolute top-2 right-2 z-10 text-[10px] font-bold text-black tracking-widest">
          РАДІО
        </span>

        {/* Artist image(s) — overlapping circles */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex -space-x-4">
          <img
            src={station.img}
            alt={station.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-transparent shadow-card"
          />
          <img
            src={`https://picsum.photos/seed/${station.id}alt/200/200`}
            alt="alt artist"
            className="w-20 h-20 rounded-full object-cover border-2 border-transparent shadow-card"
          />
        </div>
      </div>

      {/* Station name */}
      <p className="text-white text-[15px] font-bold leading-tight mb-0.5">{station.name}</p>
      {/* Description */}
      <p className="text-[#b3b3b3] text-[12px] leading-snug line-clamp-2">{station.desc}</p>
    </div>
  )
}

function SpotifyLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#121212">
      <circle cx="12" cy="12" r="12" fill="#1ed760" />
      <path
        d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6-.15-.5.15-1 .6-1.15 3.55-1.05 9.4-.85 13.1 1.35.45.25.6.85.35 1.3-.25.35-.85.5-1.3.25zm-.1 2.8c-.25.35-.7.5-1.05.25-2.7-1.65-6.8-2.15-9.95-1.15-.4.1-.85-.1-.95-.5-.1-.4.1-.85.5-.95 3.65-1.1 8.15-.55 11.25 1.35.3.15.45.65.2 1zm-1.2 2.75c-.2.3-.55.4-.85.2-2.35-1.45-5.3-1.75-8.8-.95-.35.1-.65-.15-.75-.45-.1-.35.15-.65.45-.75 3.8-.85 7.1-.5 9.7 1.1.35.15.4.55.25.85z"
        fill="#121212"
      />
    </svg>
  )
}

export default function StationSection() {
  return (
    <div className="pb-4">
      <h2 className="text-white text-2xl font-bold px-4 mb-3">Рекомендовані станції</h2>
      <div className="flex gap-3 px-4 overflow-x-auto scrollbar-hide">
        {stations.map((station) => (
          <StationCard key={station.id} station={station} />
        ))}
      </div>
    </div>
  )
}
