import { createBrowserRouter, useRoutes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HelpPage } from "./pages/help";
import { Login } from "./pages/login";
import { TaskPage } from "./pages/tasks";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "tasks",
                element: <TaskPage />,
            },
            {
                path: "help",
                element: <HelpPage />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {}
        ]
    },
];

export const router = createBrowserRouter(routes);

export const Router = () => {
    return useRoutes(routes);
}
