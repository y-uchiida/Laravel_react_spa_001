<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $adminUser = User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@example.com',
            'email_verified_at' => now(),
            'password' => \Hash::make('admin@example.com'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $user001 = User::factory()->create([
            'name' => 'user001',
            'email' => 'user001@example.com',
            'email_verified_at' => now(),
            'password' => \Hash::make('user001@example.com'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $user002 = User::factory()->create([
            'name' => 'user002',
            'email' => 'user002@example.com',
            'email_verified_at' => now(),
            'password' => \Hash::make('user002@example.com'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}