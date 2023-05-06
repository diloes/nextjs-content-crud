'use client'
import { useTasks } from '@/context/TasksContext'
import { useRouter } from 'next/navigation'

export const TaskCard = ({ task }: { task: Task }) => {
  const router = useRouter()
  const { deleteTask }: any = useTasks()

  return (
    <div
      className='bg-gray-700 hover:bg-slate-600 cursor-pointer sm:px-20 sm:py-5 sm:m2 mt-2'
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <div className='flex justify-between border-b-2 border-gray-600 items-center'>
        <h1>{task.title}</h1>
        <button
          className='bg-red-700 hover:bg-red-600 px-3 py-1 rounded-md inline-flex items-center'
          onClick={(e) => {
            e.stopPropagation() // para evitar que navegue a la pagina de edicion
            const accept = window.confirm('¿Estás seguro?')
            if (!accept) return
            deleteTask(task.id)
          }}
        >
          Eliminar
        </button>
      </div>

      <p className='text-gray-300 mt-1'>{task.description}</p>
    </div>
  )
}
