'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import '../styles/globals.css'

function App() {
  const router = useRouter()
  const token = null

  useEffect(() => {
    if (!token) {
      router.push('/login')
    }
  }, [])

  return <div>Hola mundo</div>
}

export default App
