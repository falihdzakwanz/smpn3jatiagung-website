<?php

namespace App\Http\Controllers;

use App\Models\Staff;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StaffController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Staff/Index', [
            'staffs' => Staff::all()
        ]);
    }

    public function store(Request $request)
    {
        // Validasi input
        $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
        ]);

        // Buat staff baru
        Staff::create([
            'nama' => $request->name,
            'posisi' => $request->position,
        ]);

        // Redirect kembali dengan pesan sukses
        return redirect()->back();
    }

    public function update(Request $request, Staff $staff)
    {
        // Validasi input
        $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
        ]);

        // Update staff
        $staff->update([
            'nama' => $request->name,
            'posisi' => $request->position,
        ]);

        // Redirect kembali dengan pesan sukses
        return redirect()->back();
    }

    public function destroy(Staff $staff)
    {
        // Hapus staff
        $staff->delete();

        // Redirect kembali dengan pesan sukses
        return redirect()->back();
    }

    // Method untuk halaman publik/guest
    public function guestIndex()
    {
        return Inertia::render('Staffs', [
            'staffs' => Staff::all()
        ]);
    }
}