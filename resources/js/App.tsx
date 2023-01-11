import { useEffect } from 'react';
import { Router } from "./Router"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from "./queries/AuthQuery";
import { useAuth } from './hooks/AuthContext';

export const App = () => {
    const { isAuth, setIsAuth } = useAuth();
    const { data: authUser } = useUser();

    useEffect(() => {
        if (authUser) {
            setIsAuth(true);
        }
    }, [authUser]);
    return (
        <>
            <Router />
            <ToastContainer hideProgressBar={true} />
        </>
    )
}
