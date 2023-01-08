import axios from "axios"
import { useEffect, useState } from "react";
import { Task } from "../../../types/Task";


export const TaskPage = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        getTasks();
    }, []);

    const getTasks = async () => {
        const { data } = await axios.get<Task[]>('api/tasks');
        setTasks(data);
    }

    return (
        tasks.map((task) => {
            return <div key={task.id}>{task.title}</div>
        })
    )
}
