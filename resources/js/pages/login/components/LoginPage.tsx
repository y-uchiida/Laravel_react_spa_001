import { useState } from "react";
import { useLogin } from "../../../queries/AuthQuery"

export const LoginPage = () => {
    const login = useLogin();
    const [email, setEmail] = useState('admin@example.com');
    const [password, setPassword] = useState('admin@example.com');

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login.mutate({ email, password });
    }

    return (
        <div>
            <form action="" onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">
                        <span>メールアドレス</span>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.validationMessage)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                        <span>パスワード</span>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <button
                    type="submit"
                >
                    ログイン
                </button>
            </form>
        </div>
    )
}
