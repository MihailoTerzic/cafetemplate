export default function AboutUs() {
  return (
    <section
      id="about"
      className="bg-[#f9f6f3] px-6 md:px-12 py-14 md:py-20 lg:py-24 xl:py-28"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 lg:gap-28 items-start lg:items-center">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-6">
          <p className="uppercase text-sm md:text-base tracking-[0.25em] text-[#a16a52]">
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  text-[#1a1a1a] leading-snug">
            Your Finest Coffee <br /> Served Next Door!
          </h2>
          <div className="w-14 h-[2px] bg-[#a16a52]" />
        </div>

        {/* Right Column */}
        <div className="flex-1 text-[#333] flex flex-col gap-8 text-base md:text-lg xl:text-xl leading-relaxed max-w-2xl">
          <p>
            <strong className="font-semibold text-black">Kafé TITLE</strong> zvanično otvara vrata i poziva vas na – breakfast, brunch & nezaobilaznu šolju dobre specialty kafe. U aesthetically pleasing enterijeru na Dorćolu, u LOKACIJA 33k, smešten je naš kafe koji je već postao omiljeno mesto za beg od užurbane svakodnevice.
          </p>
          <p>
            Pa tako, bilo da ste u potrazi za lokalom za jutarnju kafu, nalaženje sa prijateljima ili tihi kutak za rad, ovo novo mesto može postati i vaš izbor.
          </p>
        </div>
      </div>
    </section>
  );
}
