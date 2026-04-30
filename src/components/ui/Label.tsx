import type { LabelProps } from "@/components/types";

const CustomLabel = ({
    text,
    htmlFor,
    className,
}: LabelProps ) => {
    return (
        <label htmlFor={htmlFor} className={`font-normal text-[14px] leading-tight text-[#626262] cursor-pointer ${className}`}>{text}</label>
    )
}

export default CustomLabel;