<?php

namespace Tests\Feature;

use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Faker\Factory as Faker;

class RegistrationTest extends TestCase {
  /**
   * A basic feature test example.
   *
   * @return void
   */
  public function testExample() {

    $faker = Faker::create();

    $email = $faker->email;

    $response = $this->post('/api/auth/register', [

        'name' => $faker->name,
        'password' => $faker->password,
        'email' => $email,
    ]);

    User::whereEmail($email)->delete();

    $response->assertStatus(201);
  }
}
