import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, } from 'react-router-dom'
import { App } from './App'
import { QueryClient, QueryClientProvider } from "react-query";

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
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
)
