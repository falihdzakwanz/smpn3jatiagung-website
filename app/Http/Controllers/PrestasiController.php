<?php

namespace App\Http\Controllers;

use App\Models\Prestasi;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Log;

class PrestasiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Prestasi $prestasi)
    {
        return Inertia::render('Prestasi/Index', [
            'prestasiData' => $prestasi->all(),
            'count' => $prestasi->count(),
        ]); // return data to frontend
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Prestasi/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Prestasi $prestasi)
    {
        //
        $prestasi->create($request->validate([
            'judul' => 'required',
            'foto' => 'required',
        ]));

        return back()->with('message', 'Student added successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Prestasi $prestasi, $id)
    {
        //
        $request->validate([
            'judul' => 'required',
            'foto' => 'required', // Sesuaikan dengan validasi yang dibutuhkan
        ]);

        $prestasi = Prestasi::findOrFail($id);
        $prestasi->update($request->only(['judul', 'foto']));

        return redirect()->route('prestasi.edit')->with('success', 'Data prestasi berhasil diupdate');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Prestasi $prestasi, $id)
    {
        //
        $prestasi = Prestasi::findOrFail($id);

        $prestasi->delete();

        return redirect()->route('prestasi.edit')->with('success', 'Data prestasi berhasil dihapus');
    }
}
