import type { BadgeProps } from "@/components/types";

const Badge = ({
    text,
    icon,
    className,
    variant = "contained",
}: BadgeProps) => {

    const styles = {
        contained: "bg-[#10B77F] text-[#10221C] border",
        outline: "bg-[#10B77F1A] text-[#10B77F] border border-[#10B77F33]",
    };

    return (
        <div
            className={`${styles[variant]} h-[25px] font-inter font-bold text-xs uppercase tracking-[1.2px] leading-tight inline-flex items-center justify-center rounded-full
                    gap-2 ${className}`}
        >
            {icon && <span className="flex items-center justify-center w-5 h-5">{icon}</span>}
            {text}
        </div>

    );
};

export default Badge;