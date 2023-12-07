'use client'
import './globals.css'
import './_app.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { Inter } from 'next/font/google'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <AnimatePresence>
          <motion.main
            initial = {{ opacity: 0, y: 15 }}
            animate = {{ opacity: 1, y: 0 }}
            exit = {{ opacity: 0, y: 15 }}
            transition = {{ delay: 0.25 }}
            className="flex flex-col items-center justify-between pt-28"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  )
}
