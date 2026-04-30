import type { ReactNode } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  type: "button" | "submit";
  icon?: ReactNode;
  pre?: boolean;
  post?: boolean;
  disabled?: boolean;
  className?: string;
  variant?: "contained" | "outline" | "customize_1" | "customize_2";
}

export interface LabelProps {
  text?: string;
  htmlFor?: string;
  className?: string;
}

export interface SvgProps {
  className?: string;
}

export interface HeaderProps {
  className?: string;
  logStatus?: boolean;
}

export interface FAQProps {
  className?: string;
}

export interface InputProps {
  id?: string;
  icon?: ReactNode;
  name?: string;
  type: "text" | "checkbox" | "password" | "number";
  value?: string;
  checked?: boolean;
  maxLength?: number;
  placeholder?: string;
  className?: string;
  onChange?: (value: string | number | boolean) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface CheckBoxProps {
  id?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  custom_label_for?: string;
  custom_label_text?: string;
  checkboxParent?: string;
  inputClassName?: string;
  labelClassName?: string;
  onBlur?: (name?: string) => void;
  onChange?: (value: string | boolean) => void;
}

export interface TextAreaProps {
  id?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  onChange?: (value: string) => void;
}

export interface Hero_CardProps {
  image?: string;
  heading?: string;
  paragraph?: string;
  list?: React.ReactNode[]
  buttonText?: string;
  smallbuttonText?: string;
  className?: string;
  parentClass?: string;
  children?: React.ReactNode;
}

export interface TabsProps {
  variant?: "route" | "state";
  tabs_list?: {
    id: number;
    label?: string;
    path?: string;
    icon?: ReactNode | string;
    link_text?: string;
    href?: string;
  }[];
  children?: React.ReactNode;
  className?: string;
  tabItemClass?: string;
  activeTabClass?: string;
  inActiveTabClass?: string;
  activeTextClass?: string;
  inactiveTextClass?: string;
  tabItemClassInner?: string;
  tabContainerClass?: string;
  activeTab?: number;
  setActiveTab?: (id: number) => void;
  onClick?: (tabId: number) => void;
}

export interface CustomSelectProps {
  options?: string[];
  name?: string | number;
  value?: string;
  className?: string;
  innerOptionsClass?: string;
  divider?: boolean;
  customArrows?: React.ReactNode;
  onBlur?: (name?: string) => void;
  onChange?: (value: string) => void;
};

export interface Car_CardProps {
  image?: string;
  heading?: string;
  price?: number | string;
  className?: string;
  dealerText?: string;
  dealerTextClass?: string;
  dealerHeadingClass?: string;
  icon?: string;
  imageSizeClass?: string;
  footerbutton?: boolean;
}

export interface CardProps {
  className?: string;
  subcategory?: string; 
  description?: string; 
  icon?: ReactNode | string;
  children?: React.ReactNode;
}

export type LoginFieldsProps = {
  Email: string;
  Password: string;
};

export type RegisterFieldsProps = {
  Username: string;
  Email: string;
  Password: string;
};

export interface DashboardProps {
  cardHeaderText?: string;
  cardFooterText?: string | React.ReactNode;
  cardBodyIcon?: ReactNode;
  cardBodyHeading?: string;
  cardBodySubHeading?: string;
  className?: string;
  headerClass?: string;
  parentCardClass?: string;
  cardHeadingClass?: string;
  cardSubHeadingClass?: string;
  svgClass?: string;
  imageClass?: string;
  children?: React.ReactNode;
}

