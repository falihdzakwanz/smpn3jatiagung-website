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
        $modules = Modul::all();

        return Inertia::render('Admin/Modules/Index', [
            'modules' => $modules,
            'response' => [
                'status' => 200,
                'message' => 'Moduls retrieved successfully',
                'data' => $modules,
            ]
        ]);
    }

    public function guestIndex()
    {
        $modules = Modul::all();

        return Inertia::render('Modules', [
            'modules' => $modules,
            'response' => [
                'status' => 200,
                'message' => 'Moduls retrieved successfully',
                'data' => $modules,
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
            $file = $request->file('file');
            $filename = $file->time() . '_' getClientOriginalName();
            $path = $file->storeAs('modules', $filename, 'public');
            $modul->file = $path;
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


            $file = $request->file('file');
            $filename = $file->time() . '_' getClientOriginalName();
            $path = $file->storeAs('modules', $filename, 'public');
            $modul->file = $path;
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
