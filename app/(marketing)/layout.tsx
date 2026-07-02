import type { Metadata } from 'next'
import { Geist, Geist_Mono, Nunito_Sans } from 'next/font/google'
import '@/app/globals.css'
import { cn } from '@/lib/utils'
import Navbar from './_components/Navbar'
import { Footer } from './_components/Footer'

const nunitoSans = Nunito_Sans({ subsets: ['latin'], variable: '--font-sans' })

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'ByeBimari — Smart Health Tracking Guided by Natural Health Experts',
  description:
    'One ecosystem for smart tracking, AI insights, natural health experts, and daily guidance on your wellness transformation journey.'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={cn(
        'h-full overflow-x-hidden',
        'antialiased',
        geistSans.variable,
        geistMono.variable,
        'font-sans',
        nunitoSans.variable
      )}
    >
      <body className='min-h-full flex flex-col overflow-x-hidden'>
        <Navbar />
        <main className='flex-1 container mx-auto'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
