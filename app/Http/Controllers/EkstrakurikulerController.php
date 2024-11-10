<?php

namespace App\Http\Controllers;

use App\Models\Ekstrakurikuler;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Log;

class EkstrakurikulerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Ekstrakurikuler $ekstrakurikuler)
    {
        return Inertia::render('Ekstrakurikuler/Index', [
            'ekstrakurikulerData' => $ekstrakurikuler->all(),
            'count' => $$ekstrakurikuler->count(),
        ]); // return data to frontend
    }


    /* Buat nampilin Eskul ke Guest*/
    public function guestIndex()
    {
        $ekstrakurikuler = Ekstrakurikuler::all();
        return view('Esktrakurikuler/GuestIndex', [
            'ekstrakurikulerData' => $ekstrakurikuler,
            'response' => [
                'status' => 200,
                'message' => 'Esktrakurikuler list retrieved successfully',
                'data' => $ekstrakurikuler,
            ]
        ]);
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
    public function store(Request $request, Ekstrakurikuler $ekstrakurikuler)
    {
        //
        $$ekstrakurikuler->create($request->validate([
            'nama' => 'required',
            'deskripsi' => 'required',
            'foto_judul' => 'required',
            'foto_kegiatan' => 'required',
        ]));

        return redirect()->route('ekstrakurikuler.index')->with('message', 'Ekstrakurikuler added successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Ekstrakurikuler $ekstrakurikuler)
    {
        //
        return Inertia::render('Ekstrakurikuler/Show', [
            'ekstrakurikuler' => $ekstrakurikuler,
            'response' => [
                'status' => 200,
                'message' => 'Ekstrakurikuler retrieved successfully',
                'data' => $ekstrakurikuler,
            ]
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
    public function update(Request $request, Ekstrakurikuler $ekstrakurikuler, $id)
    {
        //
        $request->validate([
            'nama' => 'required',
            'deskripsi' => 'required',
            'foto_judul' => 'required',
            'foto_kegiatan' => 'required', // Sesuaikan dengan validasi yang dibutuhkan
        ]);

        $$ekstrakurikuler = Ekstrakurikuler::findOrFail($id);
        $$ekstrakurikuler->update($request->only(['nama', 'deskripsi', 'foto_judul', 'foto_kegiatan']));

        return redirect()->route('ekstrakurikuler.index')->with('success', 'Data ekstrakurikuler berhasil diupdate');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ekstrakurikuler $ekstrakurikuler, $id)
    {
        //
        $$ekstrakurikuleri = Ekstrakurikuler::findOrFail($id);

        $$ekstrakurikuler->delete();

        return redirect()->route('ekstrakurikuler.index')->with('success', 'Data ekstrakurikuler berhasil dihapus');
    }
}
