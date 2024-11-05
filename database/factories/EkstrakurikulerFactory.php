<?php

namespace Database\Factories;

use App\Models\Ekstrakurikuler;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ekstrakurikuler>
 */
class EkstrakurikulerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // Jika ID adalah auto-increment, Anda bisa menghapusnya
            // 'id' => $this->faker->unique()->numerify('######'),
            'nama' => $this->faker->name(),
            'deskripsi' => $this->faker->text(),
            'foto_judul' => $this->faker->imageUrl(),     // Menghasilkan URL gambar acak
            'foto_kegiatan' => $this->faker->imageUrl(), 
        ];
    }
}
