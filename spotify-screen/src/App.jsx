import TopChips from './components/TopChips'
import PlaylistGrid from './components/PlaylistGrid'
import StationSection from './components/StationSection'
import EveningSection from './components/EveningSection'
import PlayerBar from './components/PlayerBar'
import BottomNavigation from './components/BottomNavigation'

export default function App() {
  return (
    /* Phone shell — max-w constrains to mobile width, centered */
    <div className="min-h-screen bg-[#121212] flex justify-center">
      <div className="w-full max-w-[390px] relative min-h-screen bg-[#121212]">

        {/* Status bar spacer */}
        <div className="h-10" />

        {/* Scrollable content */}
        <main className="overflow-y-auto pb-[130px]">
          <TopChips />
          <PlaylistGrid />
          <StationSection />
          <EveningSection />
        </main>

        {/* Fixed bottom stack */}
        <PlayerBar />
        <BottomNavigation />
      </div>
    </div>
  )
}
