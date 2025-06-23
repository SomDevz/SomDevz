'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    name: 'SomDevz Portfolio',
    description: 'A clean, modern developer portfolio template built with Next.js and Tailwind CSS.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAMFplrWeZwbEsTEhHA-e1sAh8KGDSTM7mqw&s',
  },
  {
    id: 2,
    name: 'EduPDF Portal',
    description: 'Grade 12 PDF upload/download system built with React, MongoDB, and Express.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaq1jMrQkxX0dAACFtb6N3lU3Us9z4qdvraA&s',
  },
  {
    id: 3,
    name: 'SomTube',
    description: 'A YouTube-style video sharing app using the MERN stack and Tailwind.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsntA6uL8ZsULexaPWy6nsYB1nc6T4zKlGxA&s',
  },
  {
    id: 4,
    name: 'Notes Manager',
    description: 'A CRUD notes app with login, edit, delete features using MERN stack.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_i3QjXv_Xc0vxDDvyLaBRVYUi_e9VCbThUg&s',
  },
  {
    id: 5,
    name: 'Tailwind UI Kit',
    description: 'Open-source set of reusable Tailwind components for fast web design.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvEn0mg_rJcduym1yOZtHBLPGloIqAbSz4g&s',
  },
]

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.6 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05, boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)' },
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.8 },
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <>
      <Navbar />
      <motion.main
        className="max-w-6xl mx-auto px-6 py-16"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={containerVariants}
      >
        <h2 className="text-4xl font-extrabold text-blue-700 mb-12 text-center">
          Our Projects
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden cursor-pointer border border-gray-200"
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setSelectedProject(project)}
              initial="hidden"
              animate="visible"
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">{project.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black z-40"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={() => setSelectedProject(null)}
              />

              {/* Modal */}
              <motion.div
                className="fixed top-1/2 left-1/2 z-50 max-w-lg w-full p-6 bg-white rounded-xl shadow-xl -translate-x-1/2 -translate-y-1/2"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="relative h-64 w-full rounded-md overflow-hidden mb-4">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-blue-700 mb-3">{selectedProject.name}</h3>
                <p className="text-gray-700 mb-6">{selectedProject.description}</p>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Close
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.main>
      <Footer />
    </>
  )
}
