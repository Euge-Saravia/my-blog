import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import LogoFluir from 'public/images/LogoFluir.png'
import NavBar from './components/navBar/nav'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: 'Fluir: blog de viaje',
  description: 'Creado por Eugenia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div className=' bg-cyan-700 p-8 my-6 rounded-md'>
        <Link href="/">
          < Image
            className='mx-auto'
            src={LogoFluir}
            alt="Logo del Blog"
            width={185}
            height={185}
          />
        </Link>
        <h2 className='text-center text-slate-300'>Blog de viaje</h2>
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div className='border-t border-slate-400 mt-6 py-6 text-center text-slate-400'>
        <br />
        <h3>Developed by Eugenia</h3>
      </div>
    </footer>
  )

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=''>
          {header}
          <NavBar />
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
