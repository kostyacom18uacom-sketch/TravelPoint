const playlists = [
  {
    id: 1,
    img: 'https://picsum.photos/seed/evening1/200/200',
    bg: '#4a5828',
  },
  {
    id: 2,
    img: 'https://picsum.photos/seed/evening2/200/200',
    bg: '#2d4a3e',
  },
  {
    id: 3,
    img: 'https://picsum.photos/seed/evening3/200/200',
    bg: '#6a3fa0',
  },
]

function SpotifyLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#1ed760" />
      <path
        d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6-.15-.5.15-1 .6-1.15 3.55-1.05 9.4-.85 13.1 1.35.45.25.6.85.35 1.3-.25.35-.85.5-1.3.25zm-.1 2.8c-.25.35-.7.5-1.05.25-2.7-1.65-6.8-2.15-9.95-1.15-.4.1-.85-.1-.95-.5-.1-.4.1-.85.5-.95 3.65-1.1 8.15-.55 11.25 1.35.3.15.45.65.2 1zm-1.2 2.75c-.2.3-.55.4-.85.2-2.35-1.45-5.3-1.75-8.8-.95-.35.1-.65-.15-.75-.45-.1-.35.15-.65.45-.75 3.8-.85 7.1-.5 9.7 1.1.35.15.4.55.25.85z"
        fill="#121212"
      />
    </svg>
  )
}

function EveningCard({ item }) {
  return (
    <div className="flex-shrink-0 w-[150px]">
      <div
        className="relative rounded-lg overflow-hidden mb-2"
        style={{ backgroundColor: item.bg, aspectRatio: '1' }}
      >
        <div className="absolute top-2 left-2 z-10">
          <SpotifyLogo />
        </div>
        <img
          src={item.img}
          alt="playlist"
          className="w-full h-full object-cover opacity-70 mix-blend-overlay"
        />
        {/* decorative pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.15) 10px, rgba(0,0,0,0.15) 20px)',
          }}
        />
      </div>
    </div>
  )
}

export default function EveningSection() {
  return (
    <div className="pb-6">
      <h2 className="text-white text-2xl font-bold px-4 mb-3 leading-tight">
        Soundtrack your<br />Wednesday evening
      </h2>
      <div className="flex gap-3 px-4 overflow-x-auto scrollbar-hide">
        {playlists.map((item) => (
          <EveningCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
