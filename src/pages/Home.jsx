import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks, postTask } from '../features/taskSlice'
import EditTask from './EditTask'
import NewTask from './NewTask'
import Tasks from './Tasks'

export default function Home() {
  // Vars
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.task.tasks)
  const activeTask = useSelector(state => state.task.activeTask)

  // Fetch tasks on load
  useEffect(() => {
    dispatch(fetchTasks())
  }, [])

  return (
    <div className='main'>

      <div className='tasks'>
        <Tasks tasks={tasks} />
      </div>

      <div className='editor'>
        {(activeTask === -1) ?
          <NewTask />
          :
          <EditTask taskUID={activeTask} />
        }
      </div>
    </div>
  )
}