import type { ButtonProps } from "@/components/types";

const Button = ({
    text,
    icon,
    type,
    pre,
    post,
    className,
    disabled,
    onClick,
    variant = "contained",
}: ButtonProps) => {

    const styles = {
        contained: "bg-[#10B77F] text-[#10221C] border hover:text-white hover:bg-[#10B77F1A] hover:border-[#10B77F33]",
        customize_1: "bg-[#10221C] border border-[#10221C] text-white hover:text-black hover:bg-white",
        customize_2: "bg-[#FFFFFF33] text-white hover:text-[#10B77F] hover:bg-white",
        outline: "bg-[#10B77F1A] text-white border border-[#10B77F33] hover:text-[#10221C] hover:bg-[#10B77F] hover:border-[#10B77F33]",
    };

    return (
        <>
            {pre &&
                <button
                    disabled={disabled}
                    type={type}
                    onClick={onClick}
                    className={`${styles[variant]} font-inter font-bold transition-colors inline-flex items-center justify-center rounded-lg
                    gap-2 cursor-pointer transition-all duration-300 ease-in-out ${className}`}
                >
                    {icon && <span className="flex items-center justify-center w-5 h-5">{icon}</span>}
                    {text}
                </button>
            }

            {post &&
                <button
                   disabled={disabled}
                    type={type}
                    onClick={onClick}
                    className={`${styles[variant]} font-inter font-bold transition-colors inline-flex items-center justify-center rounded-lg
             gap-2 cursor-pointer transition-all duration-300 ease-in-out ${className}`}
                >
                    {text}
                    {icon && <span className="flex items-center justify-center w-5 h-5">{icon}</span>}
                </button>}

        </>
    );
};

export default Button;