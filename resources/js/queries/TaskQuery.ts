import { useQuery } from "react-query";

import { getTasks } from "../api/TaskApi";

export const useTasks = () => {
    return useQuery('tasks', () => getTasks());
}
