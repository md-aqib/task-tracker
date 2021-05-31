import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Doctors appoinment',
          day: 'Feb 5th at 2:30pm',
          reminder: true
      },
      {
          id: 2,
          text: 'Meeting at office',
          day: 'Feb 6th at 9:30am',
          reminder: true
      },
      {
          id: 3,
          text: 'Shopping in mall',
          day: 'Feb 7th at 3:30pm',
          reminder: false
      }
  ])
  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((el) => el.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((ele) => ele.id === id? { ...ele, reminder: !ele.reminder}: ele))
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />: "No task found"}
    </div>
  );
}

export default App;
