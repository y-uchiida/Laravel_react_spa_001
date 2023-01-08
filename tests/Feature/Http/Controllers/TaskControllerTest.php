<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Task;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
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
    public function Taskを削除できる()
    {
        $task = Task::factory()->create();

        $response = $this->deleteJson("/api/tasks/$task->id");

        $response->assertOk();
        $response->assertJsonFragment($task->toArray());

        $this->assertDatabaseMissing('tasks', $task->toArray());
    }
}