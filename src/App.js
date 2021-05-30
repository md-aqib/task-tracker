import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

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
      {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />: "No task found"}
    </div>
  );
}

export default App;
