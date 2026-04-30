'use client'

import * as Yup from "yup";
import Link from "next/link";
import Image from 'next/image'
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { DirectNew, Forgot, Envelope } from "@/components/png";
import { Button, CustomInput, CustomLabel, FormCard } from "@/components/ui";

const ForgotPwd = ({ setLoggedIn }: any) => {
    const router = useRouter();

    const forgotPwdSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is Required."),
    });

    const forgotPwdFormik = useFormik({
        initialValues: {
            email: "",
        },

        validationSchema: forgotPwdSchema,

        onSubmit: (values, { resetForm }) => {
            const newUser = {
                email: values.email,
            };

            console.log("values", newUser);
            console.log("values", forgotPwdFormik.values);
            resetForm();
            localStorage.setItem("auth", "true");
            router.push("/login");
        },

    });

    // const forgotPwdValues = forgotPwdFormik.values as Record<string, any>;
    const forgotPwdErrors = forgotPwdFormik.errors as Record<string, any>;
    const forgotPwdTouched = forgotPwdFormik.touched as Record<string, any>;

    return (
        <div className="flex items-center justify-center w-full px-[30px] my-[105px] min-h-screen">
            <FormCard className="max-w-[480px] p-[40px]">
                <form noValidate onSubmit={forgotPwdFormik.handleSubmit}>
                    <Image src={Forgot}
                        alt="icon"
                        className="mx-auto mb-[24px]"
                    />
                    <h2 className="text-center font-inter font-black text-xl md:text-2xl lg:text-3xl leading-tight md:leading-[36px] text-white capitalize w-full">
                        Forgot password?
                    </h2>
                    <p className="mb-[40px] text-center text-[#94A3B8] font-normal text-sm sm:text-md md:text-base leading-relaxed md:leading-6.5 my-4 w-full">
                        No worries, we'll send you reset instructions.
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
                            text="Email Address"
                        />

                        <CustomInput
                            type="text"
                            name="email"
                            icon={<Image src={Envelope} alt="img" />}
                            placeholder="name@company.com"
                            onBlur={forgotPwdFormik.handleBlur}
                            onChange={(value) => {
                                forgotPwdFormik.setFieldValue("email", value);
                            }}
                            value={forgotPwdFormik.values["email" as keyof typeof forgotPwdFormik.values]}
                            className="!rounded-[8px] !bg-[#10B77F0D] !border-[#10B77F33] !text-base !text-[#10B77F4D] placeholder:text-[#10B77F4D] w-full h-[53px] p-[17px]"
                        />

                        {forgotPwdTouched["email"] && forgotPwdErrors["email"] && (
                            <div className="text-red-600 text-xs leading-7">
                                {forgotPwdErrors["email"]}
                            </div>
                        )}
                    </div>

                    <Button type="submit" text="Send reset code" post={true}
                        icon={<Image src={DirectNew} alt="img" />}
                        className="shadow-[0_10px_15px_-3px_rgba(16,183,127,0.2)] mt-2 rounded-[8px] w-full flex justify-center 
                    !bg-[#10B77F] border-[#10B77F] 
                    font-bold text-xs lg:text-base leading-[24px] !text-[#10221C] h-[56px] 
                    hover:scale-90" />

                    <Link href="/login" className="mt-[32px] flex flex-col sm:flex-row items-center justify-center gap-2">
                        <i className="fa fa-arrow-left text-[#10B77F] text-lg"></i>
                        <p className="font-inter text-[#10B77F] hover:text-[#10B77F] font-semibold text-sm leading-relaxed md:leading-6.5">Back to login</p>
                    </Link>
                </form>
            </FormCard>
        </div>
    );
};

export default ForgotPwd;