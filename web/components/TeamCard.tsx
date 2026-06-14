export default function TeamCard({name,role,bio,photo}:{name:string;role:string;bio:string;photo?:string}){
  return (
    <div className="team-member card-soft p-6 text-center">
      {photo ? <img src={photo} alt={name} className="mx-auto"/> : <div className="placeholder-avatar">{name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>}
      <h5 className="mt-3" style={{color:'var(--primary)'}}>{name}</h5>
      <div className="role">{role}</div>
      <p className="mt-2 text-gray-300">{bio}</p>
    </div>
  )
}
