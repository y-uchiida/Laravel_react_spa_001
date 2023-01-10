import { Task } from '../../../types/Task'
import { useUpdateDoneTask } from '../../../queries/TaskQuery';

type Props = {
    task: Task
}

export const TaskItem = ({ task }: Props) => {
    const updateDoneTask = useUpdateDoneTask();

    return (
        <div>
            <li className={task.is_done ? 'done' : ''}>
                <label className="checkbox-label" htmlFor="">
                    <input
                        type="checkbox"
                        className="checkbox-input"
                        defaultChecked={task.is_done}
                        onClick={() => updateDoneTask.mutate(task)}
                    />
                </label>
                <span style={{
                    textDecoration: task.is_done ? 'line-through' : undefined,
                }}>
                    {task.title}
                </span>
            </li>
        </div>
    )
}
