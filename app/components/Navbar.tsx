'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Team', href: '/team' },
  { label: 'Join', href: '/join' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const menuVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo (click to go home) */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 flex-shrink-0 hover:text-blue-700 transition-colors"
        >
          SomDevz
        </Link>

        {/* Centered links on desktop */}
        <div className="hidden md:flex space-x-8 flex-grow justify-center items-center">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-medium cursor-pointer hover:text-blue-600 transition-colors ${
                pathname === link.href
                  ? 'text-blue-600 font-semibold underline underline-offset-4'
                  : 'text-gray-700'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: GitHub + mobile menu button */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/somdevz"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-blue-700 transition-colors"
            title="GitHub"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>

          {/* Mobile toggle button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-700 transition-colors focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-md absolute top-full left-0 w-full z-40"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium cursor-pointer hover:text-blue-600 transition-colors ${
                    pathname === link.href
                      ? 'text-blue-600 font-semibold underline underline-offset-4'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
