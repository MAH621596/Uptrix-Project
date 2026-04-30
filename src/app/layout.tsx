import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PageTransition from './pageTransition'
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-Inter',
})

export const metadata = {
  title: 'Uptrix',
  description: 'Next.js + Tailwind + Framer Motion site',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-[#10221C] text-[#333] overflow-x-hidden ${inter.variable}`}>
        <AuthProvider>
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}