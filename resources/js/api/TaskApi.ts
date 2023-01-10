import axios from "axios";
import { Task } from "../types/Task";

export const getTasks = async () => {
    const { data } = await axios.get<Task[]>('/api/tasks');
    return data;
}

export const updateDoneTask = async ({ id, is_done }: Task) => {
    const { data } = await axios.patch<Task>(
        `api/tasks/update-done/${id}`,
        { is_done: !is_done }
    );
    return data;
}

export const createTask = async (title: string) => {
    const { data } = await axios.post<Task>("/api/tasks", { title: title });
    return data;
}

export const updateTask = async ({ id, task }: { id: number, task: Task }) => {
    const { data } = await axios.put<Task>(`/api/tasks/${id}`, task);
    return data;
}
