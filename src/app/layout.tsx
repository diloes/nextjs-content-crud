import { TaskProvider } from '@/context/TasksContext'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CRUD Context NextJS',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <TaskProvider>
          <Navbar />
          <Layout>{children}</Layout>
        </TaskProvider>
      </body>
    </html>
  )
}
