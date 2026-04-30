"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Button from '@/components/ui/Button';
import { UptrixLogo } from "@/components/png";
import type { HeaderProps } from "@/components/types";

export const Header = ({
  className,
  logStatus,
}: HeaderProps) => {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <header className="border-b border-b-[#10B77F33] w-full px-6 md:px-12 xl:px-25 py-[16px] flex items-center justify-between gap-2.5 absolute top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-transparent">
      {/* Logo */}
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

      {/* Desktop Nav */}
      <nav className="hidden xl:flex flex-1 items-center justify-end gap-8.75 min-h-0 min-w-0">
        {[
          ["Product", "/product"],
          ["Features", "/features"],
          ["Pricing", "/pricing"],
          ["Docs", "/docs"],
          // ["Reset", "/resetPwd"],
        ].map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="transition-colors inline-flex items-center justify-center font-inter font-medium text-sm/5 text-[#CBD5E1] capitalize hover:text-[#10B77F] hover:font-boldd"
          >
            {label}
          </Link>
        ))}
      </nav>

      {user ? (
        <div className="xl:pl-[32px] hidden xl:block">
        <Button variant="contained" type="button" text="Log Out" post={true}
          onClick={handleLogout} className="px-[16px] py-[10px] text-sm/5 capitalize" />
          </div>
      ) : (
        <>
          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-[12px] xl:pl-[32px]">
            <Button variant="contained" type="button" text="Sign Up" post={true}
              onClick={() => router.push("/signup")} className="px-[16px] py-[10px] text-sm/5 capitalize" />

            <Button variant="outline" type="button" text="Login" post={true}
              onClick={() => router.push("/login")} className="px-[16px] py-[10px] text-sm/5 capitalize" />
          </div>
        </>
      )}

      {/* Hamburger */}
      <div
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="xl:hidden relative z-50 flex flex-col gap-1.5"
      >
        <span
          className={`block h-0.5 w-6 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""
            }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-all ${open ? "opacity-0" : ""
            }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""
            }`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center gap-6 transition-all duration-300 xl:hidden ${open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        {[
          ["Product", "/product"],
          ["Features", "/features"],
          ["Pricing", "/pricing"],
          ["Docs", "/docs"],
          // ["Reset", "/resetPwd"],
          // ["Sign Up", "/signup"],
          // ["Login", "/login"],
        ].map(([label, href]) => (
          <Link
            key={href}
            href={href}
            onClick={() => setOpen(false)}
            className="text-[#10B77F]/70 hover:text-[#10B77F] font-semibold font-inter text-base uppercase tracking-wider transition"
          >
            {label}
          </Link>
        ))}

        {user ? (
          <Link
            href="/logout"
            onClick={handleLogout}
            className="text-[#10B77F]/70 hover:text-[#10B77F] font-semibold font-inter text-base uppercase tracking-wider transition"
          >
            Log Out
          </Link>
        ) : (
          <>
           <Link
            href="/signup"
            onClick={() => setOpen(false)}
            className="text-[#10B77F]/70 hover:text-[#10B77F] font-semibold font-inter text-base uppercase tracking-wider transition"
          >
            Sign Up
          </Link>

           <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="text-[#10B77F]/70 hover:text-[#10B77F] font-semibold font-inter text-base uppercase tracking-wider transition"
          >
            Login
          </Link>
          </>
        )}
      </div>
    </header>
  );
}
