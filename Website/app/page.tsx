"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [clicked, setClicked] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => {
        router.push("/video")
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [clicked, router])

  const handleClick = () => {
    setClicked(true)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      {!clicked ? (
        <button
          onClick={handleClick}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Clikkk!!!!
        </button>
      ) : (
        <div className="animate-fadeOut flex items-center justify-center">
          <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded opacity-0">Clikkk!!!!</button>
        </div>
      )}
    </main>
  )
}
