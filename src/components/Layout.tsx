import { DetailedHTMLProps, HTMLAttributes } from 'react'

const Layout = ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => (
  <div className='bg-gray-900 text-white h-screen w-screen'>
    <main className='h-5/6 sm:px-28 sm:py-10 max-w-7xl mx-auto'>{children}</main>
  </div>
)

export default Layout
