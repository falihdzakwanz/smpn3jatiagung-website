<?php

namespace App\Http\Controllers;

use App\Models\Prestasi;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class PrestasiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Achievements/Index', [
            'prestasi' => Prestasi::latest()->get()
        ]);
    }

        /**
     * Display prestasi to Guest
     */

public function guestIndex()
{
    $prestasi = Prestasi::all();

    return Inertia::render('Achievements', [
        'prestasi' => $prestasi,
        'response' => [
            'status' => 200,
            'message' => 'Prestasi list retrieved successfully',
            'data' => $prestasi,
        ]
    ]);
}


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return view('Prestasi/Create', [
            'response' => [
                'status' => 200,
                'message' => 'Create form loaded successfully',
            ]
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Prestasi $prestasi)
    {
            $request->validate([
                'title' => 'required|string|max:255',
                'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048'
            ]);
    
            $prestasi = new Prestasi();
            $prestasi->judul = $request->title;
    
            if ($request->hasFile('image')) {
                $path = $request->file('image')->store('prestasi', 'public');
                if (!$path) {
                    throw new \Exception('Gagal menyimpan gambar');
                }
                $prestasi->gambar = $path;
            }
    
            $prestasi->save();

        return redirect()->route('admin.prestasi.index')->with([
            'response' => [
                'status' => 201,
                'message' => 'Prestasi created successfully',
                'data' => $prestasi,
            ]
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Prestasi $prestasi)
    {
        return view('Prestasi/Show', [
            'staff' => $prestasi,
            'response' => [
                'status' => 200,
                'message' => 'Staff retrieved successfully',
                'data' => $prestasi,
            ]
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Prestasi $prestasi)
    {
        return view('Prestasi/Edit', [
            'staff' => $prestasi,
            'response' => [
                'status' => 200,
                'message' => 'Edit form loaded successfully',
                'data' => $prestasi,
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Prestasi $prestasi)
    {
        try {
            $request->validate([
                'title' => 'required|string|max:255',
                'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048'
            ]);

            $prestasi->judul = $request->title;

            if ($request->hasFile('image')) {
                if ($prestasi->gambar) {
                    Storage::disk('public')->delete($prestasi->gambar);
                }

                $path = $request->file('image')->store('prestasi', 'public');
                if (!$path) {
                    throw new \Exception('Gagal menyimpan gambar');
                }
                $prestasi->gambar = $path;
            }

            $prestasi->save();

            return redirect()->back()->with('message', 'Prestasi berhasil diupdate');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => 'Gagal mengupdate prestasi: ' . $e->getMessage()]);
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Prestasi $prestasi)
    {
        try {
            if ($prestasi->gambar) {
                Storage::disk('public')->delete($prestasi->gambar);
            }

            $prestasi->delete();

            return redirect()->back()->with('message', 'Prestasi berhasil dihapus');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => 'Gagal menghapus prestasi: ' . $e->getMessage()]);
        }
    }
}
