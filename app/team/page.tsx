'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type TeamMember = {
  name: string
  github?: string
  image: string
}

const staticMen: TeamMember[] = [
  {
    name: 'Eng Abdalla',
    github: 'https://github.com/engabdullah-2024',
    image: 'https://avatars.githubusercontent.com/u/173546517?v=4',
  },
  {
    name: 'Mohamed Ali',
    github: 'https://github.com/Mohamedali678',
    image: 'https://avatars.githubusercontent.com/u/88269367?v=4',
  },
  {
    name: 'Duran Ali',
    github: 'https://github.com/duraanali',
    image: 'https://avatars.githubusercontent.com/u/16447314?v=4',
  },
]

export default function Team() {
  const [women, setWomen] = useState<TeamMember[]>([])

  useEffect(() => {
    async function fetchWomen() {
      try {
        const res = await fetch('https://randomuser.me/api/?gender=female&results=3')
        const data = await res.json()

        const womenData: TeamMember[] = data.results.map((user: any) => ({
          name: `${user.name.first} ${user.name.last}`,
          image: user.picture.large,
          // No GitHub link for random users, you can add placeholder or leave empty
          github: undefined,
        }))

        setWomen(womenData)
      } catch (error) {
        console.error('Failed to fetch women team members:', error)
      }
    }

    fetchWomen()
  }, [])

  const fullTeam = [...staticMen, ...women]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-grow">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Meet the Contributors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {fullTeam.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-4 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 relative mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-blue-700">{member.name}</h3>
              {member.github ? (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-blue-500 mt-2 hover:underline"
                >
                  GitHub Profile
                </a>
              ) : (
                <p className="text-sm text-gray-500 mt-2 italic">No GitHub profile</p>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
