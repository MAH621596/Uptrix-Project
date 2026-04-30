"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from '@/components/ui/Button';
import { container, item } from "@/lib/motion";
import { PrecisionCard } from "@/components/ui/Card";
import { precisionCardsData, precisionContentData } from "@/helper/data";

const PrecisionSection = () => {
    return (
        <motion.section
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#10221C] py-10 p-5 md:p-12 lg:p-16 xl:p-[80px] w-full"
        >
            <div className="flex flex-col lg:flex-row items-center gap-[25px] xl:gap-[40px]">

                {/* Left Side */}
                <div className="w-full text-center lg:text-left w-full">
                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                        {precisionCardsData.map((card, i) => (
                            <motion.div key={i} variants={item}>
                                <PrecisionCard
                                    subcategory={card.subcategory}
                                    description={card.description}
                                    className="border-none hover:scale-110"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Side */}

                {/* Heading */}
                <motion.div variants={item} className="text-center w-full py-[65px]">
                    <h2 className="font-inter font-black text-xl md:text-2xl lg:text-3xl leading-tight md:leading-[36px] text-white capitalize w-full">
                        Check Intervals & Precision
                    </h2>

                    <p className="text-[#94A3B8] font-normal text-sm sm:text-md md:text-base xl:text-lg leading-relaxed md:leading-6.5 my-[24px] w-full">
                        Precision matters when every second of downtime costs
                        revenue. Define exactly how and when we talk to your
                        servers.
                    </p>

                    {precisionContentData.map((card, i) => (
                        <motion.div key={i} variants={item}>
                            <div className="flex items-start justify-start gap-[12px] mb-[16px]">
                                {card.icon}
                                <div className="text-start">
                                    <h4 className="font-bold leading-[24px] text-white hover:text-[#10B77F] text-sm md:text-base">{card.subcategory}</h4>
                                    <p className="font-normal leading-[24px] text-[#94A3B8] hover:text-[#10B77F] mt-[12px] text-sm md:text-base">{card.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default PrecisionSection;