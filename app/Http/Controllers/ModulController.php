<?php

namespace App\Http\Controllers;

use App\Models\Modul;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ModulController extends Controller
{
    public function index()
    {
        $moduls = Modul::all();

        return Inertia::render('Admin/Modules/Index', [
            'moduls' => $moduls,
            'response' => [
                'status' => 200,
                'message' => 'Moduls retrieved successfully',
                'data' => $moduls,
            ]
        ]);
    }

    public function guestIndex()
    {
        $moduls = Modul::all();

        return Inertia::render('Moduls/Index', [
            'moduls' => $moduls,
            'response' => [
                'status' => 200,
                'message' => 'Moduls retrieved successfully',
                'data' => $moduls,
            ]
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'penerbit' => 'required',
            'deskripsi' => 'required',
            'file' => 'nullable|file',
        ]);

        $modul = new Modul();
        $modul->nama = $request->nama;
        $modul->penerbit = $request->penerbit;
        $modul->deskripsi = $request->deskripsi;

        if ($request->hasFile('file')) {
            $modul->file = $request->file('file')->store('moduls', 'public');
        }

        $modul->save();

        return redirect()->route('admin.modul.index')->with([
            'response' => [
                'status' => 201,
                'message' => 'Modul created successfully',
                'data' => $modul,
            ]
        ]);
    }

    public function show($id)
    {
        $modul = Modul::find($id);

        if (!$modul) {
            return redirect()->route('admin.modul.index')->with([
                'response' => [
                    'status' => 404,
                    'message' => 'Modul not found',
                ]
            ]);
        }

        return Inertia::render('Moduls/Show', [
            'modul' => $modul,
            'response' => [
                'status' => 200,
                'message' => 'Modul retrieved successfully',
                'data' => $modul,
            ]
        ]);
    }

    public function update(Request $request, Modul $modul)
    {
        $request->validate([
            'nama' => 'required',
            'penerbit' => 'required',
            'deskripsi' => 'required',
            'file' => 'nullable|file',
        ]);

        $modul->nama = $request->nama;
        $modul->penerbit = $request->penerbit;
        $modul->deskripsi = $request->deskripsi;

        if ($request->hasFile('file')) {
            if ($modul->file) {
                Storage::disk('public')->delete($modul->file);
            }
            $modul->file = $request->file('file')->store('moduls', 'public');
        }

        $modul->save();

        return redirect()->route('admin.modul.index')->with([
            'response' => [
                'status' => 200,
                'message' => 'Modul updated successfully',
                'data' => $modul,
            ]
        ]);
    }

    public function destroy(Modul $modul)
    {
        if ($modul->file) {
            Storage::disk('public')->delete($modul->file);
        }

        $modul->delete();

        return redirect()->route('admin.modul.index')->with([
            'response' => [
                'status' => 200,
                'message' => 'Modul deleted successfully',
                'data' => null,
            ]
        ]);
    }
}
