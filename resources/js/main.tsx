import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, } from 'react-router-dom'
import { App } from './App'
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./hooks/AuthContext";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
        mutations: {
            retry: false,
        }
    }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
)
