<?php

namespace Database\Factories;

use App\Models\Prestasi;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Prestasi>
 */
class PrestasiFactory extends Factory
{
    protected $model = Prestasi::class;

    public function definition(): array
    {
        return [
            // Jika ID adalah auto-increment, Anda bisa menghapusnya
            // 'id' => $this->faker->unique()->numerify('######'),
            'judul' => $this->faker->sentence(3),  // Menghasilkan judul dengan 3 kata
            'foto' => $this->faker->imageUrl(),     // Menghasilkan URL gambar acak
        ];
    }
}
