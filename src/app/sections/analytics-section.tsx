"use client";

import { motion } from "framer-motion";
import { container, item } from "@/lib/motion";
import { analyticsCardsData } from "@/helper/data";
import { MonitoringCard } from "@/components/ui/Card";

const AnalyticsSection = () => {
    return (
        <motion.section
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#10221C] py-10 p-5 md:p-12 lg:p-16 xl:p-[80px] w-full"
        >

            {/* Heading */}
            <motion.div variants={item} className="text-center">
                <h2 className="font-inter font-black text-xl md:text-2xl lg:text-4xl leading-tight md:leading-[40px] text-white capitalize w-full">
                 Actionable Analytics
                </h2>

                <p className="text-[#94A3B8] font-normal text-sm sm:text-md md:text-base xl:text-lg leading-relaxed md:leading-6.5 mt-[16px] w-full">
                    Turn raw monitoring data into business insights with our advanced
                    visualization tools.
                </p>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] mt-[65px]">
                {analyticsCardsData.map((card, i) => (
                    <motion.div key={i} variants={item}>
                        <MonitoringCard
                            icon={card.icon}
                            subcategory={card.subcategory}
                            description={card.description}
                            className="border-none hover:scale-110"
                        />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default AnalyticsSection;