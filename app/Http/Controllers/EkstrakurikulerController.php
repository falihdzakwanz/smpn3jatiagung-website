<?php

namespace App\Http\Controllers;

use App\Models\Ekstrakurikuler;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class EkstrakurikulerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Ekstrakurikuler $ekstrakurikuler)
    {
        return Inertia::render('Admin/Extracurricular/Index', [
            'ekstrakurikuler' => $ekstrakurikuler->all(),
            'count' => $ekstrakurikuler->count(),
        ]); // return data to frontend
    }


    /* Buat nampilin Eskul ke Guest*/
    public function guestIndex()
    {
        $ekstrakurikuler = Ekstrakurikuler::all();
        return Inertia::render('Esktrakurikuler/GuestIndex', [
            'ekstrakurikulerData' => $ekstrakurikuler,
            'response' => [
                'status' => 200,
                'message' => 'Esktrakurikuler list retrieved successfully',
                'data' => $ekstrakurikuler,
            ]
        ]);
    }

    public function welcomeIndex()
    {
        $ekstrakurikuler = Ekstrakurikuler::all();
        return $ekstrakurikuler;
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Ekstrakurikuler/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nama' => 'required|string|max:255',
            'deskripsi' => 'required|string|max:1000',
            'foto_judul' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'foto_kegiatan_1' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'foto_kegiatan_2' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'foto_kegiatan_3' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $ekstrakurikuler = new Ekstrakurikuler();
        $ekstrakurikuler->nama = $validatedData['nama'];
        $ekstrakurikuler->deskripsi = $validatedData['deskripsi'];

        if ($request->hasFile('foto_judul')) {
            $path = $request->file('foto_judul')->store('extracurriculars', 'public');
            if (!$path) {
                throw new \Exception('Gagal menyimpan gambar judul');
            }
            $ekstrakurikuler->foto_judul = $path;
        }

        if ($request->hasFile('foto_kegiatan_1')) {
            $path = $request->file('foto_kegiatan_1')->store('extracurriculars', 'public');
            if (!$path) {
                throw new \Exception('Gagal menyimpan gambar kegiatan 1');
            }
            $ekstrakurikuler->foto_kegiatan_1 = $path;
        }

        if ($request->hasFile('foto_kegiatan_2')) {
            $path = $request->file('foto_kegiatan_2')->store('extracurriculars', 'public');
            if (!$path) {
                throw new \Exception('Gagal menyimpan gambar kegiatan 2');
            }
            $ekstrakurikuler->foto_kegiatan_2 = $path;
        }

        if ($request->hasFile('foto_kegiatan_3')) {
            $path = $request->file('foto_kegiatan_3')->store('extracurriculars', 'public');
            if (!$path) {
                throw new \Exception('Gagal menyimpan gambar kegiatan 3');
            }
            $ekstrakurikuler->foto_kegiatan_3 = $path;
        }

        $ekstrakurikuler->save();

        return redirect()->route('admin.ekstrakurikuler.index')->with([
            'response' => [
                'status' => 201,
                'message' => 'Ekstrakurikuler created successfully',
                'data' => $ekstrakurikuler,
            ]
        ]);
    }


    /**
     * Display the specified resource.
     */
    public function show($nama)
    {
        $ekstrakurikuler = Ekstrakurikuler::where('nama', str_replace('-', ' ', $nama))->firstOrFail();
        return Inertia::render('ExtracurricularDetail', [
            'id' => $ekstrakurikuler->id,
            'nama' => $ekstrakurikuler->nama,
            'deskripsi' => $ekstrakurikuler->deskripsi,
            'foto_judul' => $ekstrakurikuler->foto_judul ? asset('storage/' . $ekstrakurikuler->foto_judul) : null,
            'foto_kegiatan_1' => $ekstrakurikuler->foto_kegiatan_1 ? asset('storage/' . $ekstrakurikuler->foto_kegiatan_1) : null,
            'foto_kegiatan_2' => $ekstrakurikuler->foto_kegiatan_2 ? asset('storage/' . $ekstrakurikuler->foto_kegiatan_2) : null,
            'foto_kegiatan_3' => $ekstrakurikuler->foto_kegiatan_3 ? asset('storage/' . $ekstrakurikuler->foto_kegiatan_3) : null,
        ]);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ekstrakurikuler $ekstrakurikuler)
    {
        //
        return Inertia::render('Ekstrakurikuler/Edit', [
            'ekstrakurikuler' => $ekstrakurikuler,
            'response' => [
                'status' => 200,
                'message' => 'Ekstrakurikuler retrieved successfully',
                'data' => $ekstrakurikuler,
                ]
            ]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ekstrakurikuler $ekstrakurikuler)
    {
        $validatedData = $request->validate([
            'nama' => 'required|string|max:255',
            'deskripsi' => 'required|string|max:1000',
            'foto_judul' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'foto_kegiatan_1' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'foto_kegiatan_2' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'foto_kegiatan_3' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $ekstrakurikuler->nama = $validatedData['nama'];
        $ekstrakurikuler->deskripsi = $validatedData['deskripsi'];

        if ($request->hasFile('foto_judul')) {
            if ($ekstrakurikuler->foto_judul) {
                Storage::disk('public')->delete($ekstrakurikuler->foto_judul);
            }
            $path = $request->file('foto_judul')->store('extracurriculars', 'public');
            if (!$path) {
                throw new \Exception('Gagal menyimpan gambar judul');
            }
            $ekstrakurikuler->foto_judul = $path;
        }

        if ($request->hasFile('foto_kegiatan_1')) {
            if ($ekstrakurikuler->foto_kegiatan_1) {
                Storage::disk('public')->delete($ekstrakurikuler->foto_kegiatan_1);
            }
            $path = $request->file('foto_kegiatan_1')->store('extracurriculars', 'public');
            if (!$path) {
                throw new \Exception('Gagal menyimpan gambar kegiatan 1');
            }
            $ekstrakurikuler->foto_kegiatan_1 = $path;
        }

        if ($request->hasFile('foto_kegiatan_2')) {
            if ($ekstrakurikuler->foto_kegiatan_2) {
                Storage::disk('public')->delete($ekstrakurikuler->foto_kegiatan_2);
            }
            $path = $request->file('foto_kegiatan_2')->store('extracurriculars', 'public');
            if (!$path) {
                throw new \Exception('Gagal menyimpan gambar kegiatan 2');
            }
            $ekstrakurikuler->foto_kegiatan_2 = $path;
        }

        if ($request->hasFile('foto_kegiatan_3')) {
            if ($ekstrakurikuler->foto_kegiatan_3) {
                Storage::disk('public')->delete($ekstrakurikuler->foto_kegiatan_3);
            }
            $path = $request->file('foto_kegiatan_3')->store('extracurriculars', 'public');
            if (!$path) {
                throw new \Exception('Gagal menyimpan gambar kegiatan 3');
            }
            $ekstrakurikuler->foto_kegiatan_3 = $path;
        }

        $ekstrakurikuler->save();

        return redirect()->route('admin.ekstrakurikuler.index')->with([
            'response' => [
                'status' => 200,
                'message' => 'Ekstrakurikuler updated successfully',
                'data' => $ekstrakurikuler,
            ]
        ]);
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ekstrakurikuler $ekstrakurikuler)
    {
        try {
            // Hapus file gambar jika ada
            if ($ekstrakurikuler->foto_judul) {
                Storage::disk('public')->delete($ekstrakurikuler->foto_judul);
            }

            if ($ekstrakurikuler->foto_kegiatan_1) {
                Storage::disk('public')->delete($ekstrakurikuler->foto_kegiatan_1);
            }

            if ($ekstrakurikuler->foto_kegiatan_2) {
                Storage::disk('public')->delete($ekstrakurikuler->foto_kegiatan_2);
            }

            if ($ekstrakurikuler->foto_kegiatan_3) {
                Storage::disk('public')->delete($ekstrakurikuler->foto_kegiatan_3);
            }

            // Hapus data dari database
            $ekstrakurikuler->delete();

            return redirect()->route('admin.ekstrakurikuler.index')->with([
                'response' => [
                    'status' => 200,
                    'message' => 'Ekstrakurikuler berhasil dihapus',
                    'data' => $ekstrakurikuler,
                ]
            ]);
        } catch (\Exception $e) {
            return redirect()->route('admin.ekstrakurikuler.index')->withErrors([
                'response' => [
                    'status' => 500,
                    'error' => 'Gagal menghapus ekstrakurikuler: ' . $e->getMessage(),
                ]
            ]);
        }
    }

}
