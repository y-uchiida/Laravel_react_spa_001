import { Task } from '../../../types/Task'

type Props = {
    task: Task
}

export const TaskItem = ({ task }: Props) => {
    return (
        <div>
            <li className={task.is_done ? 'done' : ''}>
                <label className="checkbox-label" htmlFor="">
                    <input type="checkbox" className="checkbox-input" checked={task.is_done} />
                </label>
                <span>
                    {task.title}
                </span>
            </li>
        </div>
    )
}
