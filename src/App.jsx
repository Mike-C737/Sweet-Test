import { Routes, Route, Link } from 'react-router-dom'
import Home from '@/pages/Home.jsx'
import About from '@/pages/About.jsx'
import MyComp from '@/components/MyComp.jsx'
import Hello from '@/components/Hello.jsx'
import Button from '@mui/material/Button'
import './App.css'

export default function App() {
  return (
    <main style={{ padding: 16 }}>
      <h1>My App</h1>

      <nav style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <MyComp />
      <Hello name="User" />
      <Button variant="contained">This Button Does Nothing</Button>
     
    </main>
  )
}
