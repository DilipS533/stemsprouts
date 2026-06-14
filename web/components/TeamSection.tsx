"use client"
import React from 'react'
import TeamCard from './TeamCard'

const team = [
  { name: 'Ava Johnson', role: 'Student Lead', bio: 'Leads robotics curriculum and mentors new members.', photo: '/partnerlogos/futurelead.avif', fav: 'Robotics', fun: 'Collects microcontrollers' },
  { name: 'Noah Lee', role: 'Curriculum Coordinator', bio: 'Develops workshop content and resources.', photo: '', fav: 'Coding', fun: 'Sketches game levels' },
  { name: 'Maya Patel', role: 'Outreach', bio: 'Coordinates community partnerships and events.', photo: '', fav: 'Science', fun: 'Builds backyard experiments' },
]

export default function TeamSection(){
  return (
    <section aria-labelledby="team-heading" className="max-w-6xl mx-auto px-6 py-20">
      <h2 id="team-heading" className="text-2xl font-bold" style={{color:'var(--accent)'}}>Meet our team</h2>
      <p className="mt-3 text-gray-300 max-w-2xl">Student leaders, volunteers, and mentors who run workshops and build curriculum.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map(t=> (
          <TeamCard key={t.name} name={t.name} role={t.role} bio={t.bio} photo={t.photo} fav={t.fav} fun={t.fun} />
        ))}
      </div>
    </section>
  )
}
