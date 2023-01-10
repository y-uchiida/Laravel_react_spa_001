import { Router } from "./Router"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
    return (
        <>
            <Router />
            <ToastContainer hideProgressBar={true} />
        </>
    )
}
