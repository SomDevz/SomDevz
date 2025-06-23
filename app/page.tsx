// pages/index.tsx
'use client'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import StatsCounters from './components/StatsCounters'
import Testimonials from './testimonials/page'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-white to-blue-50">
        <motion.h1
          className="text-5xl sm:text-6xl font-bold text-blue-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to SomDevz
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-gray-700 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          A vibrant community where Somali developers connect, collaborate, and contribute to open-source projects.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/somdevz"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md"
          >
            🌟 Join Us on GitHub
          </a>
          <div className='mt-8'>
            <StatsCounters/>
            <Testimonials/>
          </div>
        </motion.div>
        
      </main>
      <Footer />
    </>
  )
}
