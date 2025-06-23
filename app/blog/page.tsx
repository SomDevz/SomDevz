'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaBookOpen } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const blogPosts = [
  {
    id: 1,
    title: 'Mastering Modern Web Development',
    excerpt: 'Explore latest trends and best practices in modern web dev...',
    content: `Modern web development is evolving fast. From frameworks like Next.js to styling with Tailwind CSS, the ecosystem is rich.

You’ll learn about:

- Server-side rendering (SSR)
- Static site generation
- API routes
- Progressive Web Apps (PWA)
- Accessibility and SEO best practices

This article also covers practical examples to level up your skills!`,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi66qkFS0iaXHJDK_o4QpDDfhPchmEfh7vGw&s',
  },
  {
    id: 2,
    title: 'Building Scalable APIs with Node.js',
    excerpt: 'Design and implement scalable APIs for your apps...',
    content: `Node.js allows developers to create fast, scalable APIs with ease. This article explores best practices, RESTful design, and performance optimization techniques.

Topics include:

- REST API design principles
- Middleware usage
- Database integration
- Security best practices
- Performance tuning`,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpQFkgwbQ37LydAJe_Q34jB1XwgCh9Qtbzw&s',
  },
  {
    id: 3,
    title: 'Introduction to Mobile App Development',
    excerpt: 'Kickstart your journey into mobile app dev with React Native and Flutter...',
    content: `Mobile development is accessible like never before. React Native and Flutter offer cross-platform solutions.

Learn about:

- Setup and environment
- Cross-platform differences
- UI design patterns
- State management
- Deployment strategies`,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvqL-oTkaPr555gZPIqwGlPyHFv0ZAWxWr4w&s',
  },
  {
    id: 4,
    title: 'Understanding Cloud Computing',
    excerpt: 'Cloud computing basics, benefits, and how to get started...',
    content: `Cloud computing transforms how apps are built and deployed. Learn about providers, services (IaaS, PaaS, SaaS), and how to architect cloud-ready apps.

Covered topics:

- Cloud providers overview
- Deployment models
- Security considerations
- Cost management
- Case studies`,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkCnyOgBUuIQcLF5udfPRUVqPRWZNn6iIHYQ&s',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
}

const modalVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
}

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null)

  // Lock scroll when modal open
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [selectedPost])

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-12">
          Tech & Development Blog
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2 text-blue-700">{post.title}</h2>
                <p className="text-gray-600 flex-grow">{post.excerpt}</p>
                <button
                  onClick={() => setSelectedPost(post)}
                  className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaBookOpen /> Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center p-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              className="bg-white rounded-lg max-w-3xl max-h-[90vh] overflow-y-auto p-8 relative shadow-xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl font-bold"
                aria-label="Close modal"
              >
                &times;
              </button>

              <h2 className="text-3xl font-bold text-blue-700 mb-4">{selectedPost.title}</h2>
              <div className="relative h-64 w-full rounded-md overflow-hidden mb-6">
                <Image src={selectedPost.image} alt={selectedPost.title} fill className="object-cover" />
              </div>
              <p className="text-gray-700 whitespace-pre-line">{selectedPost.content}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  )
}
