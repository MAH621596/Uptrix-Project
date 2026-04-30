import Link from "next/link";
import type { CardProps } from "@/components/types";

export const MonitoringCard = ({
    icon,
    className,
    subcategory,
    description,
}: CardProps) => {
    return (
        <Link href="/">
            <div className={`p-[25px] group flex flex-col items-center md:items-start cursor-pointer gap-0 
               min-h-[210px] h-full w-full bg-[#10221C80] border border-[#10B77F1A] hover:border-[#10B77F] rounded-[12px]
                transition-all duration-300 ease-in-out ${className}`}>
                {icon && <div>{icon}</div>}
                <h4 className="font-bold leading-tight text-white group-hover:text-[#10B77F] text-lg md:text-xl group-hover:font-semibold mt-[20px]">{subcategory}</h4>
                <p className="text-center md:text-start text-[#94A3B8] font-normal text-sm md:text-base leading-relaxed md:leading-5.6 mt-[8px]">{description}</p>
            </div>
        </Link>
    );
}

export const PrecisionCard = ({
    className,
    subcategory,
    description,
}: CardProps) => {
    return (
        <Link href="/">
            <div className={`p-[20px] group flex flex-col items-center justify-center cursor-pointer gap-0 
               w-[256px] h-[256px] w-full bg-[#1E293B] border border-[#10B77F33] hover:border-[#10B77F] rounded-[8px]
                transition-all duration-300 ease-in-out ${className}`}>
                <h4 className="font-black leading-tight lg:leading-[40px] text-[#10B77F] group-hover:text-[#10B77F] text-lg md:text-4xl group-hover:font-semibold">{subcategory}</h4>
                <p className="text-center md:text-start text-[#94A3B8] font-bold text-xs text-[#94A3B8] uppercase leading-relaxed md:leading-[16px] tracking-[1.2px]">{description}</p>
            </div>
        </Link>
    );
}

export const FormCard = ({
    children,
    className,
}: CardProps) => {
    return (
        <div className={`p-[25px] h-full w-full bg-[#10221C80] border border-[#10B77F33] hover:border-[#10B77F] rounded-[12px]
                transition-all duration-300 ease-in-out ${className}`}>
            <div>{children}</div>
        </div>
    );
}