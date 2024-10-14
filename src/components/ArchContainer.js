export default function ArchContainer({ children, className = '' }) {
    return (
      <div className={`relative ${className}`}>
        <div className="absolute inset-0 bg-spa-green rounded-tl-full rounded-tr-full" style={{ height: '70%' }}></div>
        <div className="relative z-10">
          {children}
        </div>
      </div>
    )
  }