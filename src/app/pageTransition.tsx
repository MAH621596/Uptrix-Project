"use client";
import { ReactNode } from 'react'
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition({ children }: { children: ReactNode }) {
    return (
        <AnimatePresence mode="wait">
            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
            >
                {children}
            </motion.main>
        </AnimatePresence>
    );
}