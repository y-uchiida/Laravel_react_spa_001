<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Task;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Str;
use Tests\TestCase;

class TaskControllerTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function Taskの一覧が取得できる()
    {
        $taskDataCount = 10;
        $tasks = Task::factory()->count($taskDataCount)->create();
        $response = $this->getJson('/api/tasks');

        $response->assertOk();
        $response->assertJsonCount($taskDataCount);
    }

    /** @test */
    public function Taskを追加できる()
    {
        $data = [
            'title' => 'task title',
        ];
        $response = $this->postJson('/api/tasks', $data);

        $response->assertStatus(201);
        $response->assertJsonFragment($data);

        $this->assertDatabaseHas('tasks', $data);
    }

    /** @test */
    public function titleが入力されていない場合はTaskを追加できない()
    {
        $data = [
            'title' => '',
        ];
        $response = $this->postJson('/api/tasks', $data);

        $response->assertUnprocessable();
        $response->assertJsonValidationErrors(['title' => 'タイトルは必ず指定してください']);

        $this->assertDatabaseEmpty('tasks');
    }

    /** @test */
    public function titleが255文字以上の場合はTaskを追加できない()
    {
        $data = [
            'title' => str_repeat('あ', 256)
        ];
        $response = $this->postJson('/api/tasks', $data);

        $response->assertUnprocessable();
        $response->assertJsonValidationErrors(['title' => 'タイトルは、255文字以下で指定してください。']);

        $this->assertDatabaseEmpty('tasks');
    }

    /** @test */
    public function Taskを更新できる()
    {
        $task = Task::factory()->create([
            'title' => 'task title'
        ]);

        $data = [
            'title' => 'updated title'
        ];

        $response = $this->putJson("/api/tasks/$task->id", $data);

        $response->assertOk();
        $response->assertJsonFragment($data);

        $this->assertDatabaseHas('tasks', [
            'id' => $task->id,
            ...$data
        ]);
    }

    /** @test */
    public function titleが入力されていない場合はTaskを更新できない()
    {
        $task = Task::factory()->create([
            'title' => 'task title'
        ]);
        $data = [
            'title' => '',
        ];
        $response = $this->putJson("/api/tasks/$task->id", $data);

        $response->assertUnprocessable();
        $response->assertJsonValidationErrors(['title' => 'タイトルは必ず指定してください']);

        dump($task->toArray());

        $this->assertDatabaseHas('tasks', [
            'id' => $task->id,
            'title' => $task->title
        ]);
    }

    /** @test */
    public function titleが255文字以上の場合はTaskを更新できない()
    {
        $task = Task::factory()->create([
            'title' => 'task title'
        ]);
        $data = [
            'title' => str_repeat('あ', 256)
        ];
        $response = $this->putJson("/api/tasks/$task->id", $data);

        $response->assertUnprocessable();
        $response->assertJsonValidationErrors(['title' => 'タイトルは、255文字以下で指定してください。']);

        dump($task->toArray());

        $this->assertDatabaseHas('tasks', [
            'id' => $task->id,
            'title' => $task->title
        ]);
    }

    /** @test */
    public function Taskを削除できる()
    {
        $task = Task::factory()->create();

        $response = $this->deleteJson("/api/tasks/$task->id");

        $response->assertOk();
        $response->assertJsonFragment($task->toArray());

        $this->assertDatabaseMissing('tasks', $task->toArray());
    }

    /** @test */
    public function updateDoneでTaskのis_doneを変更できる()
    {
        $task = Task::factory()->create();

        // false を true に変える
        $response = $this->patchJson("/api/tasks/update-done/$task->id", [
            "is_done" => true
        ]);
        $response->assertOk();
        $response->assertJsonFragment(['is_done' => true]);

        // true を false に変える
        $response = $this->patchJson("/api/tasks/update-done/$task->id", [
            "is_done" => false
        ]);
        $response->assertOk();
        $response->assertJsonFragment(['is_done' => false]);
    }
}