import React from 'react';

export default function Weserve() {
  return (
    <section className="relative w-full min-h-[550px] md:min-h-[500px] lg:min-h-[600px] font-serif overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 z-0 flex flex-col">
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#e7e2de]" />
      </div>

      {/* Brown Center Box */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      bg-[#a16a52] text-white px-6 sm:px-10 md:px-14 lg:px-20 
                      py-12 sm:py-14 md:py-18 lg:py-20 w-[90%] max-w-5xl 
                      z-10 shadow-xl rounded-sm">
        <div className="text-center space-y-8">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
            Skriveni dragulj Dorćola, Kafeterija TITLE nudi savršenu kombinaciju
            vrhunske kafe, domaćih specijaliteta i prijatne atmosfere.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90">
            Uživajte u svežim, pažljivo pripremljenim doručcima i brunch opcijama,
            uz savršen spoj tradicionalnih i modernih ukusa. Idealno mesto za jutarnju
            kafu, lagani obrok ili vikend uživanje!
          </p>
        </div>
      </div>
    </section>
  );
}
