"use client";

import { motion } from "framer-motion";
import { UptimeSvg } from "@/components/svg";
import { container, item } from "@/lib/motion";
import { monitoringCardsData } from "@/helper/data";
import { MonitoringCard } from "@/components/ui/Card";

const MonitoringSection = () => {
    return (
        <motion.section
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#0F172A33] py-10 p-5 md:p-12 lg:p-16 xl:p-[80px] w-full"
        >

            {/* Heading */}
            <motion.div variants={item} className="text-center md:text-start max-w-2xl">
                <h2 className="flex items-center justify-center md:justify-start gap-2 tracking-[-0.75px] font-inter font-black text-xl md:text-2xl lg:text-3xl leading-tight md:leading-[36px] text-white capitalize w-full">
                    <UptimeSvg className="text-[#10B77F]" /> Uptime Monitoring
                </h2>

                <p className="text-[#94A3B8] font-normal text-sm sm:text-md md:text-base xl:text-lg leading-relaxed md:leading-6.5 my-4 w-full">
                    Global edge network ensuring your services are reachable worldwide.
                </p>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[60px]">
                {monitoringCardsData.map((card, i) => (
                    <motion.div key={i} variants={item}>
                        <MonitoringCard
                            icon={card.icon}
                            subcategory={card.subcategory}
                            description={card.description}
                            className="hover:scale-110"
                        />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default MonitoringSection;