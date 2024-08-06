import Navbar from './components/Navbar'
import ThreeScene from './ThreeScene'

function App({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <ThreeScene />
      <main>{children}</main>
    </div>
  )
}

export default App
