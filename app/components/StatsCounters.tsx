'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaUsers, FaSmileBeam, FaLaptopCode } from 'react-icons/fa'

const stats = [
  {
    id: 1,
    label: 'Team Members',
    value: 6,
    icon: <FaUsers className="text-4xl text-blue-600" />,
  },
  {
    id: 2,
    label: 'Happy Clients',
    value: 100,
    icon: <FaSmileBeam className="text-4xl text-green-600" />,
  },
  {
    id: 3,
    label: 'Active Contributors',
    value: 6,
    icon: <FaLaptopCode className="text-4xl text-purple-600" />,
  },
]

export default function StatsCounters() {
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const duration = 2000 // duration of animation in ms
    const frameDuration = 30 // update every 30 ms
    const totalFrames = Math.round(duration / frameDuration)

    const counters = stats.map(stat => ({
      target: stat.value,
      increment: stat.value / totalFrames,
    }))

    let frame = 0
    const interval = setInterval(() => {
      frame++
      setCounts(prev =>
        prev.map((count, idx) => {
          const nextValue = count + counters[idx].increment
          return nextValue >= counters[idx].target ? counters[idx].target : nextValue
        }),
      )
      if (frame === totalFrames) clearInterval(interval)
    }, frameDuration)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.id}
          className="bg-white shadow rounded-lg p-6 flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring' }}
        >
          {stat.icon}
          <h3 className="text-3xl font-bold text-gray-800 mt-4">
            {Math.floor(counts[index])}
            {stat.label === 'Happy Clients' ? '+' : ''}
          </h3>
          <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
