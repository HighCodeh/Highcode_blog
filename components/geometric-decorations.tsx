export function GeometricDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="geometric-shape circle w-32 h-32 top-20 left-[10%] animate-rotate" />
      <div className="geometric-shape hexagon w-48 h-48 bottom-40 right-[15%] animate-float" />
      <div className="geometric-shape circle w-24 h-24 top-[40%] right-[5%] animate-pulse-slow" />
      <div className="geometric-shape hexagon w-36 h-36 bottom-[20%] left-[8%] animate-rotate" />
    </div>
  )
}

