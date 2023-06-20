import Navbar from './components/Navbar'
import './globals.css'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Photography App',
  description: 'Photography Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={raleway.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
