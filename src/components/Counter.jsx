import { useState } from 'react'
export default function Counter({ start = 0 }) {
  const [v, setV] = useState(start)
  return <button onClick={() => setV(v+1)}>Count: {v}</button>
}
