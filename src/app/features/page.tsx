'use client'

import SectionReveal from '@/components/SectionReveal'
import { HeroSectionImg } from "@/components/png";
import Image from "next/image";

export default function CeremonyLocations() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-24 flex flex-col gap-12">
      <SectionReveal>
        <h2 className="text-3xl md:text-5xl font-bold">FEATURES PG</h2>
        <p className="text-gray-600 text-lg md:text-xl mt-4">
          Experience the ultimate farmhouse getaway. Perfect for family gatherings, corporate retreats, and events.
        </p>
      </SectionReveal>

      <SectionReveal>
        <div className="grid md:grid-cols-2 gap-8">
           <Image src={HeroSectionImg} alt="Img" width={100} height={100} className="w-full h-96 object-cover rounded-md" />
          <p className="text-gray-600 text-lg md:text-xl">
            Our property features a game room, full kitchen, outdoor fire pit, and mountain views. Dog-friendly accommodations available.
          </p>
        </div>
      </SectionReveal>
    </div>
  )
}
