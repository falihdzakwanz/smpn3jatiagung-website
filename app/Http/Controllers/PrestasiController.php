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
     * Display prestasi to Guest
     */

     public function guestIndex(Prestasi $prestasi)
     {
        $prestasi = Prestasi::all();
         return view('Prestasi/GuestIndex', [
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
        //
        $request->validate([
            'judul' => 'required',
            'foto' => 'required',
        ]);

        $prestasi = Prestasi::create($request->all());

        return redirect()->route('prestasi.index')->with([
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
    public function update(Request $request, Prestasi $prestasi, $id)
    {
        //
        $request->validate([
            'judul' => 'required',
            'foto' => 'required', // Sesuaikan dengan validasi yang dibutuhkan
        ]);

        $prestasi = Prestasi::findOrFail($id);
        $prestasi->update($request->only(['judul', 'foto']));

        return redirect()->route('prestasi.index')->with('success', 'Data prestasi berhasil diupdate');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Prestasi $prestasi, $id)
    {
        //
        $prestasi = Prestasi::findOrFail($id);

        $prestasi->delete();

        return redirect()->route('prestasi.index')->with('success', 'Data prestasi berhasil dihapus');
    }
}
