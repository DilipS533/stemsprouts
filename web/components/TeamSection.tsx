"use client"
import React from 'react'
import TeamCard from './TeamCard'

const studentLeaders = [
  { name: 'Ava Johnson', role: 'Student Lead', bio: 'Leads robotics curriculum and mentors new members.', photo: '/partnerlogos/futurelead.avif', fav: 'Robotics', fun: 'Collects microcontrollers' },
  { name: 'Jayla Rivera', role: 'Student Lead', bio: 'Built a sensor project used across classrooms.', photo: '/student-portrait-2.jpg', fav: 'Sensors', fun: 'Garden projects' },
]

const mentors = [
  { name: 'Noah Lee', role: 'Curriculum Coordinator', bio: 'Develops workshop content and resources.', photo: '', fav: 'Coding', fun: 'Sketches game levels' },
  { name: 'Maya Patel', role: 'Outreach', bio: 'Coordinates community partnerships and events.', photo: '', fav: 'Science', fun: 'Builds backyard experiments' },
]

const community = [
  { name: 'Maria Gomez', role: '3rd grade teacher', bio: 'Partnered to run pilot workshops.', photo: '', fav: '', fun: '' },
]

export default function TeamSection(){
  return (
    <section aria-labelledby="team-heading" className="max-w-6xl mx-auto px-6 py-20">
      <h2 id="team-heading" className="text-2xl font-bold" style={{color:'var(--accent)'}}>Meet our team</h2>
      <p className="mt-3 text-gray-300 max-w-2xl">Student leaders, volunteers, and mentors who run workshops and build curriculum.</p>

      <div className="mt-8 space-y-8">
        <div>
          <h3 className="text-lg font-semibold">Student leaders</h3>
          <p className="text-sm text-gray-400 mt-1">Student mentors who design and run workshops.</p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentLeaders.map(s=> <TeamCard key={s.name} variant="leader" {...s} />)}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Mentors & advisors</h3>
          <p className="text-sm text-gray-400 mt-1">Adults who support curriculum and scale our impact.</p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mentors.map(m=> <TeamCard key={m.name} variant="mentor" {...m} />)}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Community voices</h3>
          <p className="text-sm text-gray-400 mt-1">Teachers, volunteers, and partners sharing what works.</p>
          <div className="mt-4 space-y-4">
            {community.map(c=> (
              <div key={c.name} className="p-4 rounded-lg bg-[rgba(255,255,255,0.01)] border border-white/6">
                <div className="font-medium">{c.name} — <span className="text-sm text-gray-400">{c.role}</span></div>
                <div className="mt-2 text-sm text-gray-300">{c.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
