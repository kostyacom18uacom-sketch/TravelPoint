import { Home, Search, Library, Plus } from 'lucide-react'

const navItems = [
  { icon: Home,    label: 'Головна',      active: true },
  { icon: Search,  label: 'Пошук',        active: false },
  { icon: Library, label: 'Моя бібліотека', active: false },
  { icon: Plus,    label: 'Створити',     active: false },
]

export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#121212] border-t border-[#2a2a2a]">
      <div className="flex items-center justify-around px-2 py-2 pb-safe">
        {navItems.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            className="flex flex-col items-center gap-1 min-w-[56px] py-1"
          >
            <Icon
              size={22}
              className={active ? 'text-white' : 'text-[#b3b3b3]'}
              strokeWidth={active ? 2.5 : 2}
            />
            <span
              className={`text-[10px] leading-none ${
                active ? 'text-white font-bold' : 'text-[#b3b3b3] font-normal'
              }`}
            >
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}
