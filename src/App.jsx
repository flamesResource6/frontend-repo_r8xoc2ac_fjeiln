import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Presentation from './pages/Presentation'
import Portal from './pages/Portal'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/presentation" element={<Presentation />} />
      <Route path="/espace" element={<Portal />} />
    </Routes>
  )
}

export default App
