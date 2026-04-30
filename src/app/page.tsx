"use client";
import { HeroSection, MonitoringSection, AnalyticsSection, PrecisionSection, SecureUpTimeSection } from "./sections";


export default function Home() {
  return (
    <main className="bg-[#10221C] flex flex-col items-start w-full">
      <HeroSection />
      <MonitoringSection />
      <PrecisionSection />
      <AnalyticsSection />
      <SecureUpTimeSection />
    </main>
  );
}