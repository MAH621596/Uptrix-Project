'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

export default function SectionReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  )
}
