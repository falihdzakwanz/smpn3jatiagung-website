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
                'title' => $item->judul,
                'body' => $item->deskripsi,
                'imageSrc' => $item->foto ? asset('storage/' . $item->foto) : null
            ];
        });

        return Inertia::render('News', [
            'news' => $news
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
                $berita->foto = $path;
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
                // Hapus foto lama jika ada
                if ($berita->foto) {
                    Storage::disk('public')->delete($berita->foto);
                }

                $path = $request->file('image')->store('news', 'public');
                if (!$path) {
                    throw new \Exception('Gagal menyimpan gambar');
                }
                $berita->foto = $path;
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
            if ($berita->foto) {
                Storage::disk('public')->delete($berita->foto);
            }

            $berita->delete();

            return redirect()->back()->with('message', 'Berita berhasil dihapus');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => 'Gagal menghapus berita: ' . $e->getMessage()]);
        }
    }
}