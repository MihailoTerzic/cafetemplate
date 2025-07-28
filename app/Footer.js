"use client";

import { MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function InfoSection() {
  return (
    <section className="bg-[#b87d68] text-white px-12 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left Side: Address */}
        <div>
          <h2 className="text-4xl md:text-5xl font-light leading-snug mb-8">
            Lokacija Lokala 33K, <br /> Beograd
          </h2>

          <button className="border border-white px-6 py-3 text-lg font-semibold flex items-center gap-3 hover:bg-white hover:text-[#b87d68] transition">
            <MapPin size={20} />
            Get Direction
          </button>
        </div>

        {/* Right Side: Working Hours */}
        <div>
          <div className="uppercase text-base tracking-wide font-semibold flex items-center gap-3 mb-4">
            <Clock size={20} />
            Radno vreme
          </div>

          <div className="w-16 h-[2px] bg-white mb-6" />

          <p className="text-xl">Utorak - Nedelja</p>
          <p className="font-bold text-xl">08:00 - 22:00</p>
        </div>
      </div>

      {/* Bottom Logo */}
      <div className="border-t border-white mt-20 pt-12 text-center">
        <Image
          width={96}
          height={96}
          src="/logo.png"
          alt="Logo"
          className="mx-auto h-24 w-24"
        />
      </div>
    </section>
  );
}
