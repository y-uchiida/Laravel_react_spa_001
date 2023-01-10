import { useState } from 'react';
import { Task } from '../../../types/Task'
import { useDeleteTask, useUpdateDoneTask, useUpdateTask } from '../../../queries/TaskQuery';
import { toast } from 'react-toastify';

type Props = {
    task: Task
}

export const TaskItem = ({ task }: Props) => {
    const updateDoneTask = useUpdateDoneTask();
    const updateTask = useUpdateTask();
    const deleteTask = useDeleteTask();

    const [editTitle, setEditTitle] = useState<string | undefined>(undefined);

    const handleUpdateButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault;
        if (!editTitle) {
            toast.error('タイトルを入力してください');
            return;
        }
        // newTask に、現在のTask情報の複製オブジェクトを格納する(スプレッド構文を利用して別オブジェクトを作る)
        const newTask = { ...task };
        newTask.title = editTitle;
        // newTask をapiで送信してタイトルを更新させる
        updateTask.mutate({ id: task.id, task: newTask });
        setEditTitle(undefined);
    }

    /**
     * キーボード操作でタイトル編集欄が元に戻る処理
     * Esc キーまたは Tab キーが押されたら編集モードを終了する
     * @param e
     */
    const handleOnKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (['Escape', 'Tab'].includes(e.key)) {
            setEditTitle(undefined);
        }
    }

    const handleDeleteButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        deleteTask.mutate({ id: task.id });
    }

    const ItemInput = () => {
        return (
            <form style={{ display: 'inline-block' }}>
                <input
                    type="text"
                    onChange={(e) => setEditTitle(e.target.value)}
                    onKeyDown={handleOnKey}
                    value={editTitle} />
                <button
                    className='btn'
                    type='button'
                    onClick={handleUpdateButtonClick}
                >
                    更新
                </button>
                <button
                    className='btn'
                    type='button'
                    onClick={() => setEditTitle(undefined)}
                >
                    キャンセル
                </button>
            </form>
        )
    };


    const ItemCheckBox = () => {
        return (
            <label className="checkbox-label" htmlFor="">
                <input
                    type="checkbox"
                    className="checkbox-input"
                    defaultChecked={task.is_done}
                    onClick={() => updateDoneTask.mutate(task)}
                />
            </label>
        );
    }

    const ItemText = () => {
        return (
            <>
                <ItemCheckBox />
                <span
                    onClick={() => setEditTitle(task.title)}
                    style={{
                        textDecoration: task.is_done ? 'line-through' : undefined,
                    }}>
                    {task.title}
                </span>
                <button
                    className='btn'
                    onClick={handleDeleteButtonClick}
                >
                    削除
                </button>
            </>
        )
    }

    return (
        <div>
            <li className={task.is_done ? 'done' : ''}>
                {editTitle === undefined
                    ? ItemText()
                    : ItemInput()
                }
            </li>
        </div>
    )
}
