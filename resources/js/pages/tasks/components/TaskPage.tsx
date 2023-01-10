import { useTasks } from "../../../queries/TaskQuery"

export const TaskPage = () => {
    const { data: tasks, status } = useTasks();

    if (status === 'loading') return <div>loading...</div>
    else if (status === 'error') return <div>エラーが発生しました</div>

    if (!tasks || tasks.length === 0) {
        return <div>登録されたタスクはありません</div>
    }

    return (
        tasks.map((task) => {
            return <div key={task.id}>{task.title}</div>
        })
    )
}
