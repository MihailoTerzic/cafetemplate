export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Background image */}
      <img
        src="/background.jpg"
        alt="Cafe Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text Content */}
      <div className="relative z-20 h-full flex items-center justify-start text-white px-6 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-7xl flex flex-col gap-8">
          <h1 className="text-sm tracking-widest uppercase">
            WELCOME TO TITLE CAFE
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  leading-tight">
            Where your day starts <br /> & ends
          </h1>
          <button className="self-start border border-white px-8 py-3 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition">
            Discover More
          </button>
        </div>
      </div>
    </section>
  )
}
