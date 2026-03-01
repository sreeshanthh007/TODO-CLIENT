
export const TodoSpinner = () => (
  <div className="flex flex-col items-center justify-center py-16 gap-4">
    <div className="relative w-16 h-16">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border-4 border-slate-200" />
      {/* Spinning arc */}
      <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-400 animate-spin" />
      {/* Inner pulsing dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
      </div>
    </div>
    <p className="text-slate-500 text-sm font-medium tracking-wide animate-pulse">
      Loading your todos...
    </p>
  </div>
)