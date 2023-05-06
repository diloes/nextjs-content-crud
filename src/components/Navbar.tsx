'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()

  return (
    <header className=' bg-gray-800'>
      <div className='flex justify-between items-center sm:px-28 sm:py-3 p-2 max-w-7xl mx-auto'>
        <Link href='/'>
          <h1 className='text-white text-3xl font-bold cursor-pointer'>Tareas App</h1>
        </Link>

        <div>
          <button
            onClick={() => router.push('/new')}
            className='bg-green-500 hover:bg-green-600 px-5 py-2 text-gray-50 font-bold rounded-sm inline-flex items-center'
          >
            Añadir tarea
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
