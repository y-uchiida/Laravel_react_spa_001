import { useTasks } from "../../../queries/TaskQuery"
import { TaskItem } from "./TaskItem";

export const TaskList = () => {
    const { data: tasks, status } = useTasks();

    if (status === 'loading') return <div>loading...</div>
    else if (status === 'error') return <div>エラーが発生しました</div>

    if (!tasks || tasks.length === 0) {
        return <div>登録されたタスクはありません</div>
    }
    return (
        <>
            {tasks.map((task) => {
                return <TaskItem key={task.id} task={task} />
            })}
        </>
    )
}
