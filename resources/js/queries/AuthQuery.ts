import { useQuery, useMutation } from "react-query";
import { getUser, login, logout } from "../api/AuthApi";
import { toast } from "react-toastify";

export const useUser = () => {
    return useQuery('users', () => getUser());
}

export const useLogin = () => {
    return useMutation(login, {
        onSuccess: (user) => {
        },
        onError: () => {
            toast.error("ログインに失敗しました");
        },
    });
}

export const useLogout = () => {
    return useMutation(logout, {
        onSuccess: () => {
            toast.success('ログアウトしました');
        },
        onError: () => {
            toast.error('ログアウト時にエラーが発生しました');
        }
    })
}
