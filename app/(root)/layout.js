import { Inter } from 'next/font/google'
import {Header,Footer } from "../Components"
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portafolio frontEnd',
  description: 'mi portafolio frontend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
      
    </html>
  )
}
