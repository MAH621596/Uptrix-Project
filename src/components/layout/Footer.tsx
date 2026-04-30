import Link from "next/link";
import Image from "next/image";
import { UptrixLogo } from "@/components/png";
import { footerLinks, footerSocialLinks } from "@/helper/data";

export default function Footer() {
  return (
    <footer className="bg-[#10221C] w-full px-5 md:px-12 lg:px-16 xl:px-[80px] py-[50px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 lg:gap-8">
        {footerLinks.map((card, i) => (
          <div key={i} className="w-full lg:w-full xl:w-[342px]">
            {card.id === 1 ?
              <>
                <Link
                  href="/"
                  className="xl text-white font-inter font-semibold text-xl"
                >
                  <Image
                    src={UptrixLogo}
                    alt="Logo"
                    width={90}
                    height={25}
                  />
                </Link>

                <p className="text-[#94A3B8] font-normal text-sm leading-relaxed md:leading-6.5 my-[22px] lg:max-w-[208px]">
                  {card.heading}
                </p>

                <div className="w-full flex gap-3 md:gap-[15px] items-center px-0 py-px">
                  {card.options?.map((innerLinks, i) => {
                    return (
                      <span key={i} className="text-white text-base md:text-[20px] flex-shrink-0">
                        <Link
                          href="/"
                          className="xl text-white font-inter font-semibold text-xl"
                        >
                          <Image
                            src={innerLinks}
                            alt="Logo"
                            width={20}
                            height={20}
                          />
                        </Link>
                      </span>
                    )
                  }
                  )}
                </div>

              </> :
              <>
                <div className="w-full lg:w-full">
                  <h3 className="font-inter font-bold text-sm ms:text-base leading-tight md:leading-[24px] mb-[24px] text-white w-full">
                    {card.heading}
                  </h3>
                  <div className="w-full flex flex-col gap-3 md:gap-[15px] items-start">
                    <Link
                      href="/"
                      className="xl text-white font-inter font-semibold text-xl">
                      {card.links?.map((link, i) => (
                        <p key={i} className="text-[#94A3B8] hover:text-[#10B77F] font-normal text-sm leading-relaxed md:leading-6.5 mb-[16px] max-w-[208px]">
                          {link}
                        </p>
                      ))}
                    </Link>
                  </div>
                </div>
              </>}
          </div>
        ))}
      </div>

      <div className="border-t border-[#10B77F1A] w-full flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between gap-8 pb-0 pt-6 md:pt-8 lg:pt-[32px] px-0">
        <p className="text-center sm:text-start font-inter text-[#94A3B8] font-normal text-sm leading-relaxed md:leading-6.5">© 2024 Uptrix Monitoring Inc. All rights reserved.</p>
        <div className="flex items-start gap-6">
          {footerSocialLinks.map((social, i) => (
            <Link key={i}
              href={`${social.redirect}`}
              className="xl text-white font-inter font-semibold text-xl"
            >
              <p className="sm:text-start font-inter text-[#94A3B8] hover:text-[#10B77F] font-normal text-sm leading-relaxed md:leading-6.5">{social.link}</p>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
