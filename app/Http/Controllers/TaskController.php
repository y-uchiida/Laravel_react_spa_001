<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;
use Illuminate\Http\Request as HttpRequest;

class TaskController extends Controller
{
    /**
     * Task の一覧を返す
     * @return Task[]
     */
    public function index()
    {
        return Task::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Taskデータを受け取ってレコードを作成する
     * @param App\Http\Requests\StoreTaskRequest $request
     * @return Illuminate\Http\Response
     */
    public function store(StoreTaskRequest $request)
    {
        $task = Task::create($request->all());
        return $task
            ? response()->json($task, 201) // 作成成功の場合は作成したTask のデータと201 レスポンス
            : response()->json([], 500); // 作成失敗の場合は空配列と500 レスポンス
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTaskRequest  $request 更新する情報
     * @param  \App\Models\Task  $task 更新対象のTask
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
        $task->title = $request->title;

        $result = $task->update();
        return $result
            ? response()->json($task, 200)
            : response()->json([], 500);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
        $result = $task->delete();

        return $result
            ? response()->json($task, 200)
            : response()->json([], 500);
    }

    /**
     * 指定されたtask レコードのis_done の値を変更する
     *
     * @param Task $task
     * @param Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateDone(Task $task, HttpRequest $request)
    {
        $task->is_done = $request->is_done;

        $result = $task->update();
        return $result
            ? response()->json($task, 200)
            : response()->json([], 500);
    }
}