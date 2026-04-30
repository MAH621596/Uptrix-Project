'use client'

import * as Yup from "yup";
import Link from "next/link";
import Image from 'next/image'
import { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { loginFields, loginButtons } from '@/helper/data';
import { Direct, LogoLogin } from "@/components/png";
import { Button, CustomCheckbox, CustomInput, CustomLabel, FormCard } from "@/components/ui";
import { useAuth } from "@/context/AuthContext";

const SignUp = ({ setLoggedIn }: any) => {
  const router = useRouter();
  const { login, loading } = useAuth(); // Login API

  const [showLoginPassword, setShowLoginPassword] = useState<boolean>(false);
  const [keepLogin, setKeepLogin] = useState<boolean>(false);

  const loginSchema = Yup.object().shape({
    Email: Yup.string().email().required("Email is Required."),
    Password: Yup.string()
      .required("Password is Required.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])/,
        "Password must contain a number and a special character."
      ),
  });

  const loginFormik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },

    validationSchema: loginSchema,

    onSubmit: async (values, { resetForm }) => {
      console.log("FORM VALUES:", values);

      const res = await login({
        email: values.Email,
        password: values.Password
      });

      console.log("API RESPONSE: + LOADING", res, loading);

      if (res?.user || res?.success) {
        router.push("/dashboard");
      } else {
        alert(res?.message || "Login failed");
      }

      // const newUser = {
      //   Email: values.Email,
      //   Password: values.Password,
      // };

      // console.log("values", newUser);
      // resetForm();
      // console.log("values", loginFormik.values);
      // localStorage.setItem("auth", "true");
      // router.push("/login");
    },
  });

  // const loginValues = loginFormik.values as Record<string, any>;
  const loginErrors = loginFormik.errors as Record<string, any>;
  const loginTouched = loginFormik.touched as Record<string, any>;

  return (
    <div className="flex items-center justify-center w-full px-[30px] my-[105px] min-h-screen">
      <FormCard className="max-w-[480px] p-[40px]">
        <form noValidate onSubmit={loginFormik.handleSubmit}>
          <Image src={LogoLogin}
            alt="icon"
            className="mx-auto mb-[24px]"
          />
          <h2 className="text-center font-inter font-black text-xl md:text-2xl lg:text-3xl leading-tight md:leading-[36px] text-white capitalize w-full">
            Uptrix
          </h2>
          <p className="text-center mb-[40px] text-[#94A3B8] font-normal text-sm sm:text-md md:text-base leading-relaxed md:leading-6.5 my-4 w-full">
            Welcome back to your dashboard
          </p>

          <div>
            {loginFields.map((field, index) => {
              return (
                <div key={index} className="mb-[30px] relative">
                  <CustomLabel
                    className="uppercase !text-[#10B77F99] tracking-[0.7px] font-semibold text-sm leading-tight block mb-[10px]"
                    text={field.input_label}
                  />

                  <CustomInput
                    type={field.type === "password" && !showLoginPassword ? "password" : "text"}
                    name={field.id}
                    icon={<Image src={field.icon} alt="img" />}
                    placeholder={field.placeholder}
                    onBlur={loginFormik.handleBlur}
                    onChange={(value) => {
                      loginFormik.setFieldValue(field.id, value);
                    }}
                    value={loginFormik.values[field.id as keyof typeof loginFormik.values]}
                    className="!rounded-[8px] !bg-[#10B77F0D] !border-[#10B77F33] !text-base !text-[#10B77F4D] placeholder:text-[#10B77F4D] w-full h-[53px] p-[17px]"
                  />

                  {field.eyeIcon &&
                    <>
                      <Link href="/forgotPwd" className="absolute top-[-4px] right-0">
                        <p className="font-inter text-[#10B77F] hover:text-[#10B77F] font-medium text-xs leading-relaxed md:leading-6.5">Forgot password? </p>
                      </Link>
                      <Image src={field.eyeIcon}
                        alt="eye"
                        id="Show password"
                        className="cursor-pointer absolute top-[46px] right-[16px]"
                        onClick={() => {
                          setShowLoginPassword(!showLoginPassword);
                        }}
                      />
                    </>}

                  {loginTouched[field.id] && loginErrors[field.id] && (
                    <div className="text-red-600 text-xs leading-7">
                      {loginErrors[field.id]}
                    </div>
                  )}
                </div>
              )
            })}

            <CustomCheckbox
              id="keepLogin"
              name="keepLogin"
              value="keepLogin"
              checkboxParent="justify-start my-[24px]"
              custom_label_for="keepLogin"
              inputClassName=""
              labelClassName="!text-sm !text-[#94A3B8]"
              custom_label_text="Keep me logged in"
              checked={keepLogin}
              onChange={() => {
                setKeepLogin(!keepLogin);
              }}
            />
          </div>

          <Button type="submit" text={loading ? "Signing in..." : "Sign In"} post={true}
            icon={<Image src={Direct} alt="img" />}
            disabled={loading}
            className={`mt-2 rounded-[8px] w-full flex justify-center 
                    !bg-[#10B77F] border-[#10B77F] 
                    font-bold text-base leading-[24px] !text-white h-[56px] 
                    hover:scale-90 ${loading ? "opacity-[0.6]" : "opacity-[1]"}`} />


          <div className="flex items-center my-[30px]">
            <hr className="border-[#10B77F33] w-full my-[5px]" />
            <span className="font-normal leading-[20px] text-[10px] md:text-[12px] text-[#94A3B8] px-[6px] min-w-[140px] uppercase">Or continue with</span>
            <hr className="border-[#10B77F33] w-full my-[5px]" />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            {loginButtons.map((button, index) => {
              return (
                <Button type="button" pre={true} key={index} text={button.link_text}
                  onClick={() => console.log(button.link_text)}
                  icon={<Image src={button.icon} alt="img" />}
                  className="flex-1 w-full capitalize min-h-[41px] bg-transparent border-[0.64px] border-[#626262] 
                        font-normal text-sm text-[#E2E8F0] mb-[15px] hover:scale-90 
                        " />
              )
            })}
          </div>

          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-1 pb-0 pt-6 md:pt-8 lg:pt-[32px] px-0">
            <p className="text-center font-inter text-[#94A3B8] font-normal text-sm leading-relaxed md:leading-6.5">Don't have an account?</p>
            <Link href="/signup">
              <p className="font-inter text-[#10B77F] hover:text-[#10B77F] font-bold text-sm leading-relaxed md:leading-6.5">Create an account</p>
            </Link>
          </div>
        </form>
      </FormCard>
    </div>
  );
};

export default SignUp;