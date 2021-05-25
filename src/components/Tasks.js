import Task from './Task'

const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((ele) => (
                <Task key={ele.id} task={ele} />
            ))}
        </>
    )
}

export default Tasks
