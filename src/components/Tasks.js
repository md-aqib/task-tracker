import Task from './Task'

const Tasks = ({ tasks, onDelete }) => {
    return (
        <>
            {tasks.map((ele) => (
                <Task key={ele.id} task={ele} onDelete={onDelete} />
            ))}
        </>
    )
}

export default Tasks
