"use client";
import Link from "next/link";
import Button from '@/components/ui/Button';
import { motion } from "framer-motion";
import { container, item } from "@/lib/motion";

const SecureUpTimeSection = () => {
    return (
        <motion.section
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#10221C] py-10 p-5 md:p-12 lg:p-16 xl:p-[80px] !pt-0 w-full"
        >

            {/* Heading */}
            <div className="bg-linear-to-r from-[#10B77F] to-[#059669] rounded-[16px] text-center relative py-10 p-5 md:p-12 lg:p-14 xl:p-[65px]">
                <svg className="opacity-[0.2] absolute top-0 right-0" width="145" height="145" viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 145V120L25 95V145H0ZM50 145V70L75 45V145H50ZM100 145V45L125 70.3125V145H100ZM150 145V70.3125L175 45.3125V145H150ZM200 145V20L225 -5V145H200ZM0 80.3125V45L87.5 -42.5L137.5 7.5L225 -80V-44.6875L137.5 42.8125L87.5 -7.1875L0 80.3125Z" fill="#F1F5F9" />
                </svg>

                <motion.h2 variants={item} className="font-inter font-black text-2xl md:text-4xl lg:text-5xl leading-tight md:leading-[48px] text-white w-full">
                    Ready to secure your uptime?
                </motion.h2>

                <motion.p className="mx-auto max-w-[650px] text-[#ECFDF5] font-normal text-sm sm:text-base md:text-lg xl:text-xl leading-relaxed md:leading-6.5 my-[24px] w-full">
                    Join over 10,000 developers who trust Uptrix to keep their services
                    running 24/7/365.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    variants={item}
                    className="flex flex-col sm:flex-row items-center justify-center gap-[16px] mt-[16px]"
                >
                    <Link href="/link1" className="w-full sm:w-max">
                        <Button variant="customize_1" type="button" text="Get Started for Free" post={true}
                            className="font-black w-full px-[32px] py-[13px] text-sm md:text-base xl:text-lg/5 capitalize" />
                    </Link>

                    <Link href="/link2" className="w-full sm:w-max">
                        <Button variant="customize_2" type="button" text="Talk to Sales" post={true}
                            className="font-bold w-full px-[32px] py-[13px] text-sm md:text-base xl:text-lg/5 capitalize" />
                    </Link>
                </motion.div>

                <motion.p className="text-[#D1FAE5] font-normal text-sm leading-relaxed md:leading-6.5 my-[24px] w-full">
                    No credit card required • 14-day free trial of Pro features
                </motion.p>
            </div>
        </motion.section>
    );
};

export default SecureUpTimeSection;