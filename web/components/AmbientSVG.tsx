export default function AmbientSVG(){
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#4ade80" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#16a34a" stopOpacity="0.03" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g1)" />
        {/* subtle particle network */}
        <g fill="none" stroke="#4ade80" strokeOpacity="0.06" strokeWidth="1">
          <circle cx="10%" cy="20%" r="140" />
          <circle cx="80%" cy="10%" r="220" />
          <circle cx="70%" cy="70%" r="160" />
        </g>
      </svg>
    </div>
  )
}
