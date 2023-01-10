export const TaskInput = () => {
    return (
        <form>
            <div className='inner'>
                <input type="text" className='' placeholder='タスク名を入力してください' defaultValue='' />
                <button className='btn is-primary'>追加</button>
            </div>
        </form>
    )
}
