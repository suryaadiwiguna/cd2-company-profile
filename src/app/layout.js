import C_Footer from '@/components/layout/C_Footer'
import './globals.css'
import { Providers } from './providers'
import Navbar from '@/components/navbar/Navbar'

export const metadata = {
  title: 'Travellion',
  description: 'Your unforgettable journey',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <C_Footer />
        </Providers>
      </body>
    </html >
  )
}
