'use client'

import Link from "next/link";
import Image from "next/image";
import Button from '@/components/ui/Button';
import { HeroSectionImg } from "@/components/png";
import SectionReveal from '@/components/SectionReveal'
import ProtectedRoute from "@/components/ProtectedRoute";
import { AnalyticsSection, PrecisionSection, } from "../sections";
import { dashboardCardsData } from "@/helper/data";
import { MonitoringCard } from "@/components/ui/Card";

export default function Page() {
  return (
    <ProtectedRoute>
      <div className="max-w-7xl mx-auto w-full py-10 p-5 md:p-12 lg:p-[20px] mt-[100px] lg:mt-[150px] flex flex-col lg:flex:row items-start gap-8">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mb-[120px]">
            {dashboardCardsData.map((card, i) => (
                <div key={i}>
                    <MonitoringCard
                        icon={card.icon}
                        subcategory={card.subcategory}
                        description={card.description}
                        className="hover:scale-110"
                    />
                </div>
            ))}
        </div>

        <SectionReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <Image src={HeroSectionImg} alt="Img" width={100} height={100} className="w-full h-96 object-cover rounded-md" />
            <div>
              <h1
                className="mb-[26px] text-center lg:text-start font-inter font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-[1.3] lg:leading-[70px] text-white capitalize mb-0"
              >
              <span className="text-[#10B77F]">Monitoring Engine</span>
              </h1>
              <p className="mb-[26px] text-white text-base text-center lg:text-start">
                Our property features a game room, full kitchen, outdoor fire pit, and mountain views. Dog-friendly accommodations available.
                A comprehensive suite of tools built for speed, accuracy, and reliability. Monitor your entire infrastructure from a single, unified dashboard.
                Experience the ultimate farmhouse getaway. Perfect for family gatherings, corporate retreats, and events.
              </p>
              {/* Buttons */}
              <div
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-[16px] mt-[14px]"
              >
                <Link href="/link1" className="w-full sm:w-max">
                  <Button variant="contained" type="button" text="Explore More" post={true}
                    className="w-full px-[32px] py-[13px] text-sm md:text-base xl:text-lg/5 capitalize" />
                </Link>

                <Link href="/link2" className="w-full sm:w-max">
                  <Button variant="outline" type="button" text="View Demo" post={true}
                    className="w-full px-[32px] py-[13px] text-sm md:text-base xl:text-lg/5 capitalize" />
                </Link>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>

      <div className="py-10 p-5 md:p-12 lg:p-[80px] mb-[20px]">
        <AnalyticsSection />
        <PrecisionSection />
      </div>
    </ProtectedRoute>
  );
}