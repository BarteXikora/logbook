import { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'logbook' }

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout