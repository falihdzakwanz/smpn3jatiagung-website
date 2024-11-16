<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Prestasi;

class PrestasiControllerTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_display_the_prestasi_index_page()
    {
        $response = $this->get(route('prestasi.edit'));

        $response->assertStatus(200);
        $response->assertSee('Data Prestasi'); // Ganti dengan konten yang ada di halaman
    }

    /** @test */
    public function it_can_store_a_new_prestasi()
    {
        $data = [
            'judul' => 'Juara 1 Lomba Codin',
            'foto' => 'foto_juara1.jg',
        ];

        $response = $this->post(route('prestasi.store'), $data);

        $response->assertStatus(302); // Redirect setelah sukses menambahkan
        $this->assertDatabaseHas('prestasi', $data);
    }

    /** @test */
    public function it_can_update_a_prestasi()
    {
        $prestasi = Prestasi::factory()->create();

        $data = [
            'judul' => 'Juara 2 Lomba Coding',
            'foto' => 'foto_juara2.jpg',
        ];

        $response = $this->put(route('prestasi.update', $prestasi->id), $data);

        $response->assertStatus(302);
        $this->assertDatabaseHas('prestasi', $data);
    }

    /** @test */
    public function it_can_delete_a_prestasi()
    {
        $prestasi = Prestasi::factory()->create();

        $response = $this->delete(route('prestasi.destroy', $prestasi->id));

        $response->assertStatus(302);
        $this->assertDatabaseMissing('prestasi', ['id' => $prestasi->id]);
    }
}
