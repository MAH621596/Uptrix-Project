import type { CheckBoxProps } from "@/components/types";
import { CustomInput, CustomLabel } from '@/components/ui';
import { CheckboxIcon } from "@/components/svg";

const CustomCheckbox = ({
    id,
    name,
    value,
    checked,
    checkboxParent,
    custom_label_for,
    inputClassName,
    labelClassName,
    custom_label_text,
    onBlur,
    onChange,
}: CheckBoxProps) => {
    return (
        <div className={`${checkboxParent} flex gap-[12px] items-center justify-center`}>
            <div className="relative">
                <CustomInput
                    id={id}
                    name={name}
                    value={value}
                    type="checkbox"
                    checked={checked}
                    onBlur={() => onBlur?.(String(name))}
                    onChange={(val:any) => onChange?.(val as boolean)}
                    className={`${inputClassName} peer 
                    appearance-none w-[22px] h-[22px]
                    border-2 border-[#10B77F33] hover:border-[#10B77F]
                    rounded-[6px] bg-[#10B77F0D] mb-[-5px] !p-[8px]
                    checked:bg-[#10B77F] checked:border-0 checked:shadow-[0_0px_0px_0.25rem_rgba(16,183,127,.25)]`}
                                                                         
                />
                <CheckboxIcon />
            </div>
            <CustomLabel
                className={`${labelClassName} text-[18px]`}
                text={custom_label_text}
                htmlFor={custom_label_for}
            />
        </div>
    )
}

export default CustomCheckbox