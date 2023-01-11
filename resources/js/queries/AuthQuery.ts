import { useQuery, useMutation } from "react-query";
import { getUser, login, logout } from "../api/AuthApi";
import { toast } from "react-toastify";
import { useAuth } from "../hooks/AuthContext";

export const useUser = () => {
    return useQuery('users', () => getUser());
}

export const useLogin = () => {
    const { setIsAuth } = useAuth();

    return useMutation(login, {
        onSuccess: (user) => {
            if (user) {
                setIsAuth(true);
                toast.success('ログインしました');
            }
        },
        onError: () => {
            toast.error("ログインに失敗しました");
        },
    });
}

export const useLogout = () => {
    const { setIsAuth } = useAuth();

    return useMutation(logout, {
        onSuccess: (user) => {
            if (user) {
                setIsAuth(false);
                toast.success('ログアウトしました');
            }
        },
        onError: () => {
            toast.error('ログアウト時にエラーが発生しました');
        }
    })
}
