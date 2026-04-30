"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from '@/components/ui/Button';
import { container, item } from "@/lib/motion";
import { HeroSectionImg } from "@/components/png";

const HeroSection = () => {
    return (
        <motion.section
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#10221C] px-6 md:px-12 xl:px-25 relative h-auto xl:h-screen py-[125px] w-full"
        >
            <div className="flex flex-col lg:flex-row items-center gap-[25px] xl:gap-[40px]">

                {/* Left Side */}
                <div className="w-full text-center lg:text-left">

                    <motion.h1
                        variants={item}
                        className="text-center lg:text-start font-inter font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-[1.3] lg:leading-[70px] text-white capitalize mb-0"
                    >
                        Enterprise Grade <br /><span className="text-[#10B77F]">Monitoring <br className="hidden lg:block" />Engine</span>
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="text-center lg:text-start text-[#94A3B8] font-normal text-sm sm:text-base md:text-lg xl:text-xl leading-relaxed md:leading-6.5 mx-auto my-6 whitespace-pre-wrap max-w-xl md:max-w-2xl lg:max-w-3xl"
                    >
                        A comprehensive suite of tools built for speed, <br className="hidden lg:block" />
                        accuracy, and reliability. Monitor your entire <br className="hidden lg:block" />
                        infrastructure from a single, unified dashboard.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={item}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-[16px] mt-[14px]"
                    >
                        <Link href="/link1" className="w-full sm:w-max">
                            <Button variant="contained" type="button" text="Start Monitoring Free" post={true}
                                className="w-full px-[32px] py-[13px] text-sm md:text-base xl:text-lg/5 capitalize" />
                        </Link>

                        <Link href="/link2" className="w-full sm:w-max">
                            <Button variant="outline" type="button" text="View Demo" post={true}
                                className="w-full px-[32px] py-[13px] text-sm md:text-base xl:text-lg/5 capitalize" />
                        </Link>
                    </motion.div>

                </div>

                {/* Right Side */}
                <motion.div
                    variants={item}
                    className="relative group cursor-pointer w-full hidden lg:block"
                >
                    <Image
                        alt="Stats"
                        width={100}
                        height={100}
                        src={HeroSectionImg}
                        className={`flex-1 w-full object-cover transition-all duration-300 group-hover:scale-98`}
                    />

                    {/* Custom Overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-300 rounded-lg"></div>

                    {/* Zoom Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                        <i className="fa fa-search text-white text-lg"></i>
                    </div>

                </motion.div>

            </div>
        </motion.section>
    );
};

export default HeroSection;