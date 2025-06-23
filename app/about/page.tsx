'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaUsers, FaCodeBranch, FaLightbulb } from 'react-icons/fa'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      staggerChildren: 0.25,
      duration: 0.7,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 }
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main 
        className="max-w-4xl mx-auto px-6 py-16 flex-grow"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={containerVariants}
      >
        <motion.h2 
          className="text-4xl font-extrabold text-blue-700 mb-6 text-center"
          variants={itemVariants}
        >
          Who We Are
        </motion.h2>
        <motion.p
          className="text-gray-700 leading-relaxed text-lg mb-8"
          variants={itemVariants}
        >
          <strong>SomDevz</strong> is a global open-source community of Somali developers.
          We believe in the power of collaboration, mentorship, and code.
          Our mission is to provide a platform where developers of all levels can learn,
          grow, and build real-world software together.
        </motion.p>

        <motion.h3 
          className="text-3xl font-semibold mt-12 mb-6 text-blue-600 text-center"
          variants={itemVariants}
        >
          What We Do
        </motion.h3>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center space-y-4">
            <FaUsers className="text-5xl text-blue-600" />
            <h4 className="text-xl font-semibold text-blue-700">Community Building</h4>
            <p className="text-gray-700 max-w-xs">
              Create a strong network of Somali developers supporting each other.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center space-y-4">
            <FaCodeBranch className="text-5xl text-blue-600" />
            <h4 className="text-xl font-semibold text-blue-700">Open Source Projects</h4>
            <p className="text-gray-700 max-w-xs">
              Develop real-world open-source software to sharpen skills and contribute globally.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center space-y-4">
            <FaLightbulb className="text-5xl text-blue-600" />
            <h4 className="text-xl font-semibold text-blue-700">Mentorship & Learning</h4>
            <p className="text-gray-700 max-w-xs">
              Provide guidance, workshops, and resources to help developers grow professionally.
            </p>
          </motion.div>
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  )
}
