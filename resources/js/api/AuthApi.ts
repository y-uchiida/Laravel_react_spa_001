import axios from "axios";
import type { User } from "../types/User";

export const getUser = async () => {
    const { data } = await axios.get<User>('/api/user');
    return data;
};

export const login = async ({
    email,
    password
}: {
    email: string,
    password: string
}) => {
    const { data } = await axios.post<User>('/api/login', { email, password });
    return data;
};

export const logout = async () => {
    const { data } = await axios.post<User>('/api/logout');
    return data;
}
