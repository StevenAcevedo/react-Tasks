import React from 'react'
import Tasklist from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
  

  
  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
      <TaskForm  />
      <Tasklist  />
      </div>
    </main>
  )
  }0

export default App