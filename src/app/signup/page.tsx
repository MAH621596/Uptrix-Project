'use client'

import * as Yup from "yup";
import Link from "next/link";
import Image from 'next/image'
import { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { registerFields } from '@/helper/data';
import { DirectNew } from "@/components/png";
import { useAuth } from "@/context/AuthContext";
import { Button, CustomInput, CustomLabel, FormCard } from "@/components/ui";

const SignUp = ({ setLoggedIn }: any) => {
    const router = useRouter();
    const { register, loading } = useAuth(); // Register API

    const [showRegister, setShowRegister] = useState<boolean>(false);
    const [activeMainTab, setActiveMainTab] = useState<number>(1);

    const [showRegisterPassword, setShowRegisterPassword] = useState<boolean>(false);

    // console.log(setLoggedIn);

    const handleRegisterTab = () => {
        setShowRegister(true);
    }

    const registerSchema = Yup.object().shape({
        name: Yup.string().required("Username is Required."),
        email: Yup.string().email().required("Email is Required."),
        password: Yup.string()
            .required("Password is Required.")
            .min(8, "Password is too short - should be 8 chars minimum.")
            .matches(
                /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])/,
                "Password must contain a number and a special character."
            ),
    });

    const registerFormik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },

        validationSchema: registerSchema,

        onSubmit: async (values, { resetForm }) => {
            console.log("FORM VALUES:", values);

            const res = await register({
                name: values.name,
                email: values.email,
                password: values.password,
            })

             console.log("API RESPONSE:", res);

            if (res?.success) {
                alert(res?.message);
                router.push("/login");
            } else {
                alert(res?.message || "Registration failed");
            }
            // const newUser = {
            //     Email: values.Email,
            //     Password: values.Password,
            //     Username: values.Username,
            // };

            // console.log("values", newUser);
            // console.log("values", registerFormik.values);
            // resetForm();
            // localStorage.setItem("auth", "true");
            // router.push("/login");
        },

    });

    // const registerValues = registerFormik.values as Record<string, any>;
    const registerErrors = registerFormik.errors as Record<string, any>;
    const registerTouched = registerFormik.touched as Record<string, any>;

    return (
        <div className="flex items-center justify-center w-full px-[30px] my-[105px] min-h-screen">
            <FormCard className="max-w-[480px] p-[40px]">
                <form noValidate onSubmit={registerFormik.handleSubmit}>
                    <h2 className="flex items-center justify-center md:justify-start gap-2 tracking-[-0.75px] font-inter font-black text-xl md:text-2xl lg:text-3xl leading-tight md:leading-[36px] text-white capitalize w-full">
                        Create Account
                    </h2>
                    <p className="mb-[40px] text-[#10B77FB2] font-normal text-sm sm:text-md md:text-base leading-relaxed md:leading-6.5 my-4 w-full">
                        Join Uptrix today and start building.
                    </p>

                    <div>
                        {registerFields.map((field, index) => {
                            return (
                                <div key={index} className="mb-[30px] relative">
                                    <CustomLabel
                                        className="uppercase !text-[#10B77F99] tracking-[0.7px] font-semibold text-sm leading-tight block mb-[10px]"
                                        text={field.input_label}
                                    />

                                    <CustomInput
                                        type={field.type === "password" && !showRegisterPassword ? "password" : "text"}
                                        name={field.id}
                                        icon={<Image src={field.icon} alt="img" />}
                                        placeholder={field.placeholder}
                                        onBlur={registerFormik.handleBlur}
                                        onChange={(value) => {
                                            registerFormik.setFieldValue(field.id, value);
                                        }}
                                        value={registerFormik.values[field.id as keyof typeof registerFormik.values]}
                                        className="!rounded-[8px] !bg-[#10B77F0D] !border-[#10B77F33] !text-base !text-[#10B77F4D] placeholder:text-[#10B77F4D] w-full h-[53px] p-[17px]"
                                    />

                                    {field.eyeIcon &&
                                        <Image src={field.eyeIcon}
                                            alt="eye"
                                            id="Show password"
                                            className="cursor-pointer absolute top-[46px] right-[16px]"
                                            onClick={() => {
                                                setShowRegisterPassword(!showRegisterPassword);
                                            }}
                                        />}

                                    {registerTouched[field.id] && registerErrors[field.id] && (
                                        <div className="text-red-600 text-xs leading-7">
                                            {registerErrors[field.id]}
                                        </div>
                                    )}
                                </div>
                            )
                        })}

                        {/* <CustomCheckbox
                            id="Show password"
                            name="Show password"
                            value="Show password"
                            checkboxParent="md:justify-end"
                            custom_label_for="Show password"
                            inputClassName=""
                            labelClassName="!text-[15px]"
                            custom_label_text="Show password"
                            checked={showRegisterPassword}
                            onChange={() => {
                                setShowRegisterPassword(!showRegisterPassword);
                            }}
                        /> */}
                    </div>

                    <Button type="submit" text={loading ? "Getting Started..." : "Get Started"} post={true}
                        icon={<Image src={DirectNew} alt="img" />}
                         disabled={loading}
                        className={`mt-2 rounded-[8px] w-full flex justify-center 
                    !bg-[#10B77F] border-[#10B77F] 
                    font-bold text-sm lg:text-base leading-[24px] !text-[#10221C] h-[56px] 
                    hover:scale-90 ${loading ? "opacity-[0.6]" : "opacity-[1]"}`} />

                    <div className="border-t border-[#10B77F1A] w-full flex flex-col sm:flex-row items-center justify-center gap-2 pb-0 pt-6 md:pt-8 lg:pt-[32px] px-0">
                        <p className="text-center font-inter text-[#94A3B8] font-normal text-base leading-relaxed md:leading-6.5">Already have an account? </p>
                        <Link href="/login">
                            <p className="font-inter text-[#10B77F] hover:text-[#10B77F] font-bold text-base leading-relaxed md:leading-6.5">Log in </p>
                        </Link>
                    </div>
                </form>
            </FormCard>
        </div>
    );
};

export default SignUp;