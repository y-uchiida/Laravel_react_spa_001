<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $user_id = $this->faker->numberBetween(1, 3);
        $title_string = $this->faker->realText(rand(15, 40));
        return [
            'title' => "$title_string (user_id: $user_id)",
            'is_done' => $this->faker->boolean(10),
            'user_id' => $user_id,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}