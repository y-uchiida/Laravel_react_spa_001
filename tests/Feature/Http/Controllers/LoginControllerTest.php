<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class LoginControllerTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        User::factory()->create(['email' => 'test@example.com']);
    }

    /** @test */
    public function ログイン用のAPIエンドポイントからユーザーが認証できる()
    {
        $data = [
            'email' => 'test@example.com',
            'password' => 'password',
        ];

        $response = $this->postJson('api/login', $data);

        $response->assertStatus(200);
        $this->assertSame('test@example.com', Auth::user()->email);
    }
}