'use client'

import Image from 'next/image'

const contributors = [
  {
    name: 'Eng Abdalla',
    image: 'https://avatars.githubusercontent.com/u/173546517?v=4',
    des: 'I am proud to contribute to SomDevz and empower Somali developers worldwide.',
  },
  {
    name: 'Mohamed Ali',
    image: 'https://avatars.githubusercontent.com/u/88269367?v=4',
    des: 'Being part of SomDevz has helped me grow my skills and collaborate on amazing projects.',
  },
  {
    name: 'Duran Ali',
    image: 'https://avatars.githubusercontent.com/u/16447314?v=4',
    des: 'SomDevz is a fantastic community where mentorship and innovation thrive.',
  },
]

export default function Testimonials() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
        What Our Contributors Say
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {contributors.map(({ name, des, image }, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center"
          >
            <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden">
              <Image src={image} alt={name} fill className="object-cover" />
            </div>
            <h3 className="font-semibold text-blue-700 text-lg mb-2">{name}</h3>
            <p className="text-gray-600 text-sm">{des}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
