import { Task } from '../../../types/Task'

type Props = {
    task: Task
}

export const TaskItem = ({ task }: Props) => {
    return (
        <div>{task.title}</div>
    )
}
