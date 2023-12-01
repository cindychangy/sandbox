import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const mierB = localFont({
  src: [
    {
      path: '../../public/fonts/mierb-bold-webfont.woff2', 
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/mierb-demi-webfont.woff2',
      weight: '500',
      style: 'semi-bold',
    },
    {
      path: '../../public/fonts/mierb-bold-webfont.woff2',
      weight: '700',
      style: 'bold',
    }
  ],
})

export const metadata = {
  title: 'Code Sandbox',
  description: 'Just playing around',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mierB.className}>{children}</body>
    </html>
  )
}
