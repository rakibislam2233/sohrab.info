
export default function LoadingSkeleton({ className = '' }: { className?: string }){
  return (
    <div className={`animate-pulse bg-white/40 rounded p-4 ${className}`}>
      <div className="h-6 bg-gray-200 rounded mb-3" />
      <div className="h-40 bg-gray-200 rounded mb-3" />
      <div className="h-3 bg-gray-200 rounded w-3/4" />
    </div>
  )
}
