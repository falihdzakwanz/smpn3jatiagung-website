<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class BeritaController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/News/Index', [
            'news' => Berita::latest()->get()
        ]);
    }

    public function guestIndex()
    {
        $news = Berita::latest()->get()->map(function ($item) {
            return [
                'id' => $item->id,
                'judul' => $item->judul,
                'deskripsi' => $item->deskripsi,
                'gambar' => $item->gambar ? asset(  'storage/'.$item->gambar) : null
            ];
        });

        return Inertia::render('News', [
            'news' => $news
        ]);
    }

    public function show($nama)
    {
        $berita = Berita::where('judul', str_replace('-', ' ', $nama))->firstOrFail();
        return Inertia::render('NewsDetail', [
            'id' => $berita->id,
            'judul' => $berita->judul,
            'deskripsi' => $berita->deskripsi,
            'gambar' => $berita->gambar ? asset('storage/' . $berita->gambar) : null,
        ]);
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'required|string',
                'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048'
            ]);

            $berita = new Berita();
            $berita->judul = $request->title;
            $berita->deskripsi = $request->description;

            if ($request->hasFile('image')) {
                $path = $request->file('image')->store('news', 'public');
                if (!$path) {
                    throw new \Exception('Gagal menyimpan gambar');
                }

                $berita->gambar = $path;
            }
            $berita->save();

            return redirect()->back()->with('message', 'Berita berhasil ditambahkan');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => 'Gagal menambahkan berita: ' . $e->getMessage()]);
        }
    }

    public function update(Request $request, Berita $berita)
    {
        try {
            $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'required|string',
                'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048'
            ]);

            $berita->judul = $request->title;
            $berita->deskripsi = $request->description;

            if ($request->hasFile('image')) {
                // Hapus gambar lama jika ada
                if ($berita->gambar) {
                    Storage::disk('public')->delete($berita->gambar);
                }

                $path = $request->file('image')->store('news', 'public');
                if (!$path) {
                    throw new \Exception('Gagal menyimpan gambar');
                }
                $berita->gambar = $path;
            }

            $berita->save();

            return redirect()->back()->with('message', 'Berita berhasil diupdate');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => 'Gagal mengupdate berita: ' . $e->getMessage()]);
        }
    }

    public function destroy(Berita $berita)
    {
        try {
            if ($berita->gambar) {
                Storage::disk('public')->delete($berita->gambar);
            }

            $berita->delete();

            return redirect()->back()->with('message', 'Berita berhasil dihapus');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => 'Gagal menghapus berita: ' . $e->getMessage()]);
        }
    }
}
