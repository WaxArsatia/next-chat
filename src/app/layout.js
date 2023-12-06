import './globals.css'

export const metadata = {
  title: 'Chatting App',
  description: 'Chatting App by WaxArsatia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
