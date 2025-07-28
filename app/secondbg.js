import Image from 'next/image'

export default function Secondbg() {
  return (
    <section className="relative w-full min-h-[55vh] md:min-h-[65vh] lg:min-h-[70vh] flex items-center justify-center">
      {/* Background image */}
      <Image
        src="/bg2.jpg"
        alt="Cafe Background"
        fill
        sizes="100vw"
        priority
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text Content */}
      <div className="relative z-20 px-6 md:px-12 text-center max-w-7xl">
        <h3 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-light leading-tight tracking-wide">
          ALL DAY <br className="hidden sm:block" /> BREAKFAST & BRUNCH
        </h3>
      </div>
    </section>
  )
}
