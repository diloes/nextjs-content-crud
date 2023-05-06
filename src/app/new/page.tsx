'use client'
import { useTasks } from '@/context/TasksContext'
import { type Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { useRouter } from 'next/navigation'
import { type ChangeEvent, type FormEvent, useState, useEffect } from 'react'

function Page({ params }: { params: Params }) {
  const [task, setTask] = useState<Task>()
  const { tasks, createTask, updateTask }: any = useTasks()
  const router = useRouter()

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTask({ ...task, [event.currentTarget.name]: event.currentTarget.value })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (params.id) {
      updateTask(params?.id, task)
    } else {
      createTask(task?.title, task?.description)
    }

    router.push('/')
  }

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task: Task) => task.id === params.id)
      taskFound && setTask({ title: taskFound.title, description: taskFound.description })
    }
  }, [params.id, tasks])

  return (
    <div className='flex justify-center items-center h-full w-full'>
      <form onSubmit={handleSubmit} className='bg-gray-700 p-10 w-full h-full'>
        <h2 className='mb-4'>Nueva tarea</h2>
        <input
          className='bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full placeholder:text-gray-500'
          name='title'
          placeholder='Título de la tarea'
          onChange={handleChange}
          value={task?.title}
        />
        <textarea
          className='bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full placeholder:text-gray-500'
          name='description'
          placeholder='Describe la tarea...'
          onChange={handleChange}
          value={task?.description}
          rows={5}
        />
        <button className='bg-green-500 hover:bg-green-400 px-1 py-2 rounded-sm disabled:opacity-30 mt-4'>
          Guardar
        </button>
      </form>
    </div>
  )
}

export default Page
