import { ReactNode } from 'react'
import type { Metadata } from 'next'

import Navbar from '@components/layout/navbar/Navbar'

import bodyClass from '@theme'

export const metadata: Metadata = { title: 'logbook' }

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="pl">
      <body className={bodyClass}>
        <Navbar />

        {children}
      </body>
    </html>
  )
}

export default RootLayout