import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/AuthContext";
import { TaskInput } from "./TaskInput";
import { TaskList } from "./TaskList";

export const TaskPage = () => {
    const navigate = useNavigate();
    const { isAuth } = useAuth();

    useEffect(() => {
        if (!isAuth) {
            navigate('/login');
        }
    }, [isAuth]);

    return (
        <>
            <TaskInput />
            <TaskList />
        </>
    )
}
