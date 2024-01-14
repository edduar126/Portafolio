import { NavbarAbout,FooterAbout } from './about/ui'
import '../globals.css'
export const metadata = {
  title: 'Sobre Mi',
  description: 'Mi portafolio con nextjs',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">

      <body>
      <header className=" grid grid-cols-1 md:flex flex-col text-center bg-scroll bg-my_bg_image bg-center h-[400px]">
       <NavbarAbout/>
    </header>
        {children}
        <FooterAbout/>
        </body>
    </html>
  )
}
