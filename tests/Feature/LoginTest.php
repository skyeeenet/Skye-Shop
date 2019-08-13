<?php

namespace Tests\Feature;

use App\User;
use Faker\Factory as Faker;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LoginTest extends TestCase {
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

    User::whereEmail($email)->delete();

    $response->assertStatus(200);
  }
}
