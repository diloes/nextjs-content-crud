'use client'
import { createContext, useEffect, useState } from 'react'
import { useContext } from 'react'

// Creamos el contexto
const TaskContext = createContext({})

// Un custom hook para usar el context(opcional)
export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) throw new Error('useTasks must be used within a TaskProvider')
  return context
}

// Componente que provee el contexto
export const TaskProvider = ({ children }: { children: any }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    // obtenemos las tareas de localStorage
    const tasks = localStorage.getItem('tasks')
    // si hay tareas, las parseamos a un array de objetos si no, array vacio
    return tasks ? JSON.parse(tasks) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // Guardar una nueva tarea
  const createTask = (title: string, description: string) => {
    setTasks([...tasks, { id: crypto.randomUUID(), title, description }])
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const updateTask = (id: string, updatedTask: Task) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task)))
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  )
}
