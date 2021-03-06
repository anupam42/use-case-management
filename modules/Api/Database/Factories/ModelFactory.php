<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory = app('Illuminate\Database\Eloquent\Factory');

$factory->define(\Modules\Api\Models\Application::class, function (Faker\Generator $faker) {
    return [
        'nome' => $faker->name
    ];
});

$factory->define(\Modules\Api\Models\Actor::class, function(Faker\Generator $faker) {
    return [
        'nome' => $faker->name,
        'descricao' => $faker->text()
    ];
});