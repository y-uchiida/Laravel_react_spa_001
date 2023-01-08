import axios from "axios"
import { Task } from "../../../types/Task";
import { useQuery } from "react-query";

export const TaskPage = () => {
    const { data: tasks, status } = useQuery('tasks', async () => {
        const { data } = await axios.get<Task[]>('api/tasks');
        return data;
    });

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
