import { BarChart2 } from 'lucide-react'

const playlists = [
  {
    id: 1,
    title: 'Пісні, що сподобалися',
    bg: 'bg-gradient-to-br from-[#4b2fc9] to-[#7c5cca]',
    icon: '♥',
    iconColor: 'text-white',
    showBars: true,
  },
  {
    id: 2,
    title: 'Бадьора добірка',
    img: 'https://picsum.photos/seed/badyora/64/64',
  },
  {
    id: 3,
    title: 'Тижнева добірка',
    img: 'https://picsum.photos/seed/tyzhne/64/64',
    labelBg: true,
  },
  {
    id: 4,
    title: 'Damiano David: мікс',
    img: 'https://picsum.photos/seed/damiano/64/64',
  },
  {
    id: 5,
    title: 'Радіо: Naked',
    img: 'https://picsum.photos/seed/nakedradio/64/64',
    badge: 'РАДІО',
  },
  {
    id: 6,
    title: 'Вечірній мікс',
    img: 'https://picsum.photos/seed/evening/64/64',
  },
]

function PlaylistCard({ item }) {
  return (
    <div className="flex items-center gap-3 bg-[#1f1f1f] rounded-md overflow-hidden h-16">
      {/* Thumbnail */}
      <div className="w-16 h-16 flex-shrink-0 relative">
        {item.img ? (
          <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
        ) : (
          <div className={`w-full h-full flex items-center justify-center ${item.bg}`}>
            <span className="text-2xl text-white">♥</span>
          </div>
        )}
        {item.badge && (
          <span className="absolute top-1 right-1 text-[9px] font-bold text-white bg-black/40 px-1 rounded">
            {item.badge}
          </span>
        )}
      </div>

      {/* Title */}
      <span className="text-white text-[13px] font-bold leading-tight pr-2 flex-1">
        {item.title}
      </span>

      {/* Active bars indicator (first card) */}
      {item.showBars && (
        <BarChart2 size={16} className="text-[#1ed760] mr-3 flex-shrink-0" />
      )}
    </div>
  )
}

export default function PlaylistGrid() {
  return (
    <div className="px-4 pb-4">
      <div className="grid grid-cols-2 gap-2">
        {playlists.map((item) => (
          <PlaylistCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
