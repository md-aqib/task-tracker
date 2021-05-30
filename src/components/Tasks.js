import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((ele) => (
                <Task key={ele.id} task={ele} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    )
}

export default Tasks
