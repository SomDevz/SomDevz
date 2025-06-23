'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useState } from 'react'

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For demo: just set submitted true
    setSubmitted(true)
    // Normally, send data to backend or API here
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main
        className="flex-grow max-w-3xl mx-auto px-6 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">Contact Us</h2>
        <p className="text-center text-gray-700 mb-12">
          Have questions or want to collaborate? Fill the form below and we'll get back to you soon!
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-center"
          >
            Thank you for reaching out! We will contact you shortly.
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Name */}
            <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
              <FaUser className="text-blue-600 mr-3" size={20} />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="flex-grow outline-none text-gray-700"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
              <FaEnvelope className="text-blue-600 mr-3" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="flex-grow outline-none text-gray-700"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
              <FaPhone className="text-blue-600 mr-3" size={20} />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (optional)"
                value={formData.phone}
                onChange={handleChange}
                className="flex-grow outline-none text-gray-700"
              />
            </div>

            {/* Message */}
            <div className="flex items-start border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
              <FaCommentDots className="text-blue-600 mr-3 mt-2" size={20} />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="flex-grow resize-none outline-none text-gray-700"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </motion.form>
        )}
      </motion.main>
      <Footer />
    </div>
  )
}
