import { useQuery, useQueryClient, useMutation } from "react-query";
import { createTask, deleteTask, getTasks, updateDoneTask, updateTask } from "../api/TaskApi";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

type ErrorResponse = {
    data: {
        errors: {
            messages: string[]
        }
    }
}

export const useTasks = () => {
    return useQuery('tasks', () => getTasks());
}

export const useUpdateDoneTask = () => {
    const queryClient = useQueryClient();

    return useMutation(updateDoneTask, {
        // updateDoneTask を実行し、成功したらonSuccess が呼び出される
        // invalidateQueries でキャッシュを破棄してデータを再取得する
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        },
        onError: () => {
            toast.error('更新に失敗しました');
        }
    });
}

export const useCreateTask = () => {
    const queryClient = useQueryClient();

    return useMutation(createTask, {
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
            toast.success('タスクを追加しました');
        },
        onError: (error: AxiosError) => {
            const response: ErrorResponse | undefined = error.response as ErrorResponse;
            if (response?.data.errors) {
                // バリデーションエラーのメッセージがある場合はそれを表示する
                Object.values(response?.data.errors).map((error) => {
                    error.map(message => {
                        toast.error(message);
                    });
                });
            } else {
                // バリデーションエラーがない場合は汎用のエラーメッセージを表示する
                toast.error('タスクの追加に失敗しました');
            }
        }
    });
};

export const useUpdateTask = () => {
    const queryClient = useQueryClient();

    return useMutation(updateTask, {
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
            toast.success('タスクを更新しました');
        },
        onError: (error: AxiosError) => {
            const response: ErrorResponse | undefined = error.response as ErrorResponse;
            if (response?.data.errors) {
                // バリデーションエラーのメッセージがある場合はそれを表示する
                Object.values(response?.data.errors).map((error) => {
                    error.map(message => {
                        toast.error(message);
                    });
                });
            } else {
                // バリデーションエラーがない場合は汎用のエラーメッセージを表示する
                toast.error('タスクの更新に失敗しました');
            }
        }
    });
}

export const useDeleteTask = () => {
    const queryClient = useQueryClient();

    return useMutation(deleteTask, {
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
            toast.success('タスクを削除しました');
        },
        onError: (error: AxiosError) => {
            const response: ErrorResponse | undefined = error.response as ErrorResponse;
            if (response?.data.errors) {
                // バリデーションエラーのメッセージがある場合はそれを表示する
                Object.values(response?.data.errors).map((error) => {
                    error.map(message => {
                        toast.error(message);
                    });
                });
            } else {
                // バリデーションエラーがない場合は汎用のエラーメッセージを表示する
                toast.error('タスクの削除に失敗しました');
            }
        }
    });
}
