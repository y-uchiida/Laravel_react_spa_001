import { useState } from "react";
import { useCreateTask } from "../../../queries/TaskQuery";

export const TaskInput = () => {
    const createTask = useCreateTask();
    const [title, setTitle] = useState('');

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        // 実行後にtasks の値を変更させるので、mutate()をよびだす
        createTask.mutate(title);
        setTitle('');
    }

    return (
        <form>
            <div className='inner'>
                <input
                    type="text"
                    className=''
                    placeholder='タスク名を入力してください'
                    onChange={(e) => { setTitle(e.target.value) }}
                    value={title}
                />
                <button
                    type="button"
                    className='btn is-primary'
                    onClick={handleClick}
                >追加</button>
            </div>
        </form>
    )
}
