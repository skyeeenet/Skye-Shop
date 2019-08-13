<?php

namespace Tests\Feature;

use App\User;
use Faker\Factory as Faker;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LogoutTest extends TestCase {
  /**
   * A basic feature test example.
   *
   * @return void
   */
  public function testExample() {

    $faker = Faker::create();

    $email = $faker->email;
    $password = $faker->password;

    $this->post('/api/auth/register', [

        'name' => $faker->name,
        'password' => $password,
        'email' => $email,
    ]);

    $response = $this->post('/api/auth/login', [

        'email' => $email,
        'password' => $password,
    ]);

    $token = $response->original['data']['api_token'];

    $response = $this->post('/api/auth/logout', [

        'api_token' => $token,
    ]);

    User::whereEmail($email)->delete();

    $response->assertStatus(204);
  }
}
