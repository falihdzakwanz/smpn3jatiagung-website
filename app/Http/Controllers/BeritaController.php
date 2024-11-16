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
        $beritas = Berita::all();

        return Inertia::render('Berita/Index', [
            'beritas' => $beritas,
            'response' => [
                'status' => 200,
                'message' => 'Berita retrieved successfully',
                'data' => $beritas,
            ]
        ]);
    }

    public function guestIndex()
    {
        $beritas = Berita::all();

        return Inertia::render('Berita/Index', [
            'beritas' => $beritas,
            'response' => [
                'status' => 200,
                'message' => 'Berita retrieved successfully',
                'data' => $beritas,
            ]
        ]);
    }


    public function create()
    {
        return Inertia::render('Berita/Create', [
            'response' => [
                'status' => 200,
                'message' => 'Create form loaded successfully',
            ]
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'judul' => 'required',
            'deskripsi' => 'required',
            'file' => 'nullable|file',
        ]);

        $berita = new Berita();
        $berita->judul = $request->judul;
        $berita->deskripsi = $request->deskripsi;

        if ($request->hasFile('file')) {
            $berita->file = $request->file('file')->store('beritas', 'public');
        }

        $berita->save();

        return redirect()->route('beritas.index')->with([
            'response' => [
                'status' => 201,
                'message' => 'Berita created successfully',
                'data' => $berita,
            ]
        ]);
    }

    
    public function show($id) {
        // Retrieve the berita by ID
        $berita = Berita::find($id);
    
        // Check if the berita exists
        if (!$berita) {
            return redirect()->route('beritas.index')->with([
                'response' => [
                    'status' => 404,
                    'message' => 'Berita not found',
                ]
            ]);
        }
    
        // Return the Inertia::render with berita data
        return Inertia::render('Berita/Show', [
            'berita' => $berita,
            'response' => [
                'status' => 200,
                'message' => 'Berita retrieved successfully',
                'data' => $berita,
            ]
        ]);
    }
    public function edit(Berita $berita)
    {
        return Inertia::render('Berita/Edit', [
            'berita' => $berita,
            'response' => [
                'status' => 200,
                'message' => 'Edit form loaded successfully',
                'data' => $berita,
            ]
        ]);
    }

    public function update(Request $request, Berita $berita)
    {
        $request->validate([
            'judul' => 'required',
            'deskripsi' => 'required',
            'file' => 'nullable|file',
        ]);

        $berita->judul = $request->judul;
        $berita->deskripsi = $request->deskripsi;

        if ($request->hasFile('file')) {
            // Delete the old file if exists
            if ($berita->file) {
                Storage::disk('public')->delete($berita->file);
            }
            $berita->file = $request->file('file')->store('beritas', 'public');
        }

        $berita->save();

        return redirect()->route('beritas.index')->with([
            'response' => [
                'status' => 200,
                'message' => 'Berita updated successfully',
                'data' => $berita,
            ]
        ]);
    }

    public function destroy(Berita $berita)
    {
        // Delete the file if it exists
        if ($berita->file) {
            Storage::disk('public')->delete($berita->file);
        }

        $berita->delete();

        return redirect()->route('beritas.index')->with([
            'response' => [
                'status' => 200,
                'message' => 'Berita deleted successfully',
                'data' => null,
            ]
        ]);
    }
}

