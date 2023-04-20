import './globals.css'
import Head from './head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <Head />
      <body>
        <main className='pt-[5%]'>
          {children}
        </main>
      </body>
    </html>
  )
}
