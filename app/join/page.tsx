'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Join() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-xl mx-auto px-4 py-16 flex-grow">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Join SomDevz</h2>
        <p className="text-gray-700 mb-6">
          Want to be part of the Somali tech movement? Contribute to our open-source
          repositories and showcase your skills with pride!
        </p>
        <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="GitHub Profile"
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
        <p className="mt-6 text-sm text-gray-500">
          Or just join us directly via{' '}
          <a
            href="https://github.com/somdevz"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 underline"
          >
            GitHub
          </a>
          .
        </p>
      </main>
      <Footer />
    </div>
  )
}
