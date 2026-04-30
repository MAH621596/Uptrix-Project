'use client'

import * as Yup from "yup";
import Link from "next/link";
import Image from 'next/image'
import { useFormik } from "formik";
import OtpInput from 'react-otp-input';
import { useRouter } from "next/navigation";
import { Envelope, OTP, Direct } from "@/components/png";
import { Button, CustomInput, CustomLabel, FormCard } from "@/components/ui";

const VerifyOTP = ({ setLoggedIn }: any) => {
    const router = useRouter();

    const OTPSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is Required."),
        otp: Yup.string()
            .length(6, "OTP must be 6 digits")
            .matches(/^[0-9]+$/, "Only numbers allowed")
            .required("OTP is required")
    });

    const OTPFormik = useFormik({
        initialValues: {
            email: "",
            otp: "",
        },

        validationSchema: OTPSchema,

        onSubmit: (values, { resetForm }) => {
            const newUser = {
                email: values.email,
                otp: values.otp,
            };

            console.log("values", newUser);
            console.log("values", OTPFormik.values);
            resetForm();
            localStorage.setItem("auth", "true");
            router.push("/login");
        },

    });

    // const OTPValues = OTPFormik.values as Record<string, any>;
    const OTPErrors = OTPFormik.errors as Record<string, any>;
    const OTPTouched = OTPFormik.touched as Record<string, any>;

    return (
        <div className="flex items-center justify-center w-full px-[30px] my-[105px] min-h-screen">
            <FormCard className="max-w-[480px] p-[40px]">
                <form noValidate onSubmit={OTPFormik.handleSubmit}>
                    <Image src={OTP}
                        alt="icon"
                        className="mx-auto mb-[24px]"
                    />
                    <h2 className="text-center font-inter font-black text-xl md:text-2xl lg:text-3xl leading-tight md:leading-[36px] text-white capitalize w-full">
                        Verify OTP
                    </h2>
                    <p className="mb-[40px] text-center text-[#94A3B8] font-normal text-sm sm:text-md md:text-base leading-relaxed md:leading-6.5 my-4 w-full">
                        We've sent a 6-digit verification code to your email
                        address. Please enter it below to continue.
                    </p>

                    <div className="mb-[24px] rounded-[8px] bg-[#10B77F0D] border-[#10B77F] border-l-[4px] p-[16px]">
                        <p className="text-center md:text-start text-[#CBD5E1] font-normal text-sm leading-[24px] w-full">
                            We'll send a code to your email to verify your
                            identity. Make sure you have access to this inbox.
                        </p>
                    </div>

                    <div className="mb-[30px] relative">
                        <CustomLabel
                            className="uppercase !text-[#10B77F99] tracking-[0.7px] font-semibold text-sm leading-tight block mb-[10px]"
                            text="Verification Email"
                        />

                        <CustomInput
                            type="text"
                            name="email"
                            icon={<Image src={Envelope} alt="img" />}
                            placeholder="alex.design@example.com"
                            onBlur={OTPFormik.handleBlur}
                            onChange={(value) => {
                                OTPFormik.setFieldValue("email", value);
                            }}
                            value={OTPFormik.values["email" as keyof typeof OTPFormik.values]}
                            className="!rounded-[8px] !bg-[#10B77F0D] !border-[#10B77F33] !text-base !text-[#10B77F4D] placeholder:text-[#10B77F4D] w-full h-[53px] p-[17px]"
                        />

                        {OTPTouched["email"] && OTPErrors["email"] && (
                            <div className="text-red-600 text-xs leading-7">
                                {OTPErrors["email"]}
                            </div>
                        )}
                    </div>

                    <div className="mb-[30px] relative">
                        <CustomLabel
                            className="capitalize !text-[#10B77F99] tracking-[0.7px] font-semibold text-sm leading-tight block mb-[10px]"
                            text="Enter 6-digit code"
                        />

                        <div className="custom-otp-wrap px-4">
                            <OtpInput
                                value={OTPFormik.values.otp}
                                onChange={(val) => {
                                    const clean = val.replace(/[^0-9]/g, "").slice(0, 6);
                                    OTPFormik.setFieldValue("otp", clean);
                                }}
                                numInputs={6}
                                containerStyle="flex items-center justify-center gap-3 md:gap-4"
                                renderInput={(props) => (
                                    <input
                                        {...props}
                                        className="w-[53px] h-[56px] text-center font-bold text-2xl text-white bg-[#10B77F0D] border-2 border-[#10B77F33] rounded-[8px] focus:outline-none"
                                    />
                                )}
                            />
                        </div>

                        {OTPFormik.touched.otp && OTPFormik.errors.otp && (
                            <p className="text-red-500 text-xs mt-2">
                                {OTPFormik.errors.otp}
                            </p>
                        )}
                    </div>

                    <Button type="submit" text="Verify Account" post={true}
                        icon={<Image src={Direct} alt="img" />}
                        className="shadow-[0_10px_15px_-3px_rgba(16,183,127,0.2)] mt-2 rounded-[8px] w-full flex justify-center 
                    !bg-[#10B77F] border-[#10B77F] 
                    font-bold text-xs lg:text-base leading-[24px] !text-white h-[56px] 
                    hover:scale-90" />

                    <div className="border-t border-[#10B77F1A] w-full flex flex-col sm:flex-row items-center justify-center gap-2 pb-0 pt-6 md:pt-8 lg:pt-[32px] px-0">
                        <p className="text-center font-inter text-[#94A3B8] font-normal text-sm leading-relaxed md:leading-6.5">
                            Didn't receive the code?</p>
                        <Link href="/login">
                            <p className="font-inter text-[#10B77F] hover:text-[#10B77F] font-bold text-base leading-relaxed md:leading-6.5">Resend OTP </p>
                        </Link>
                    </div>

                    <Link href="/login" className="mt-[16px] flex flex-col sm:flex-row items-center justify-center gap-2">
                        <i className="fa fa-arrow-left text-[#64748B] text-base"></i>
                        <p className="font-inter text-[#64748B] hover:text-[#10B77F] font-semibold text-xs leading-relaxed md:leading-6.5">Back to login</p>
                    </Link>
                </form>
            </FormCard>
        </div>
    );
};

export default VerifyOTP;