import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-8 mt-auto sticky bottom-0 w-full z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Left: Copyright */}
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} SomDevz. All rights reserved.
        </p>

        {/* Center: Social Links */}
        <div className="flex space-x-6 text-white text-2xl">
          <a
            href="https://github.com/somdevz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SomDevz GitHub"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/somdevz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SomDevz Twitter"
            className="hover:text-gray-300 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/company/somdevz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SomDevz LinkedIn"
            className="hover:text-gray-300 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Right: Optional small tagline */}
        <p className="text-sm md:text-base italic text-gray-300">
          Building Somali tech futures, together.
        </p>
      </div>
    </footer>
  )
}
