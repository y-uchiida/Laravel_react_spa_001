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
}