import type { InputProps } from "@/components/types";

const CustomInput = ({
  id,
  name,
  type,
  icon,
  value,
  maxLength,
  placeholder,
  className,
  checked,
  onBlur,
  onChange,
}: InputProps) => {
  return (
    <>
      {icon ? 
      <>
        <div className="relative">
          <span className="absolute top-[16px] left-[16px] flex items-center justify-center w-5 h-5">
            {icon}
          </span>

          <input
            id={id}
            max={maxLength}
            type={type} name={name} placeholder={placeholder}
            value={value}
            onBlur={onBlur}
            onChange={(e) => { onChange?.(e.target.value) }}
            className={`${icon ? "pl-[50px]" : ""} border border-[#626262] rounded-[5px] p-[14px] text-[#626262] font-normal text-[14px] lg:text-[18px] leading-tight cursor-pointer focus:outline-0 ${className}`}
          />
        </div>
      </> 
      : <>
        <input
          id={id}
          type={type} name={name} placeholder={placeholder}
          value={type === "checkbox" ? undefined : value}
          checked={type === "checkbox" ? checked : undefined}
          onChange={(e) => {
            if (type === "checkbox") {
              onChange?.(e.target.checked);
            } else {
              onChange?.(e.target.value);
            }
          }}
          className={`border border-[#626262] rounded-[5px] p-[14px] text-[#626262] font-normal text-[14px] lg:text-[18px] leading-tight placeholder:text-[#626262] cursor-pointer focus:outline-0 ${className}`} />
      </>
      }
    </>
  )
}

export default CustomInput;