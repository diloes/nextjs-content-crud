'use client'
import { TaskCard } from '@/components/TaskCard'
import { useTasks } from '@/context/TasksContext'

function Page() {
  const { tasks }: { tasks: Task[] } = useTasks()

  return (
    <div className='flex justify-center'>
      <div className='w-full mx-2 mt-2'>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}

export default Page
