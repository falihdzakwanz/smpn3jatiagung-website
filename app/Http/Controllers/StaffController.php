<?php


namespace App\Http\Controllers;

use App\Models\Staff;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StaffController extends Controller
{
    public function index()
    {
        $staffs = Staff::all();
        return view('Staffs/Index', [
            'staffs' => $staffs,
            'response' => [
                'status' => 200,
                'message' => 'Staff list retrieved successfully',
                'data' => $staffs,
            ]
        ]);
    }

    public function guestIndex()
    {
        $staffs = Staff::all();
        return view('Staffs/GuestIndex', [
            'staffs' => $staffs,
            'response' => [
                'status' => 200,
                'message' => 'Staff list retrieved successfully',
                'data' => $staffs,
            ]
        ]);
    }
    
    public function create()
    {
        return view('Staffs/Create', [
            'response' => [
                'status' => 200,
                'message' => 'Create form loaded successfully',
            ]
        ]);
    }
    
    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'posisi' => 'required',
        ]);

        $staff = Staff::create($request->all());

        return redirect()->route('staffs.index')->with([
            'response' => [
                'status' => 201,
                'message' => 'Staff created successfully',
                'data' => $staff,
            ]
        ]);
    }
    
/*************  ✨ Codeium Command ⭐  *************/
    /**
     * Show the specified resource.
     *
     * @param  \App\Models\Staff  $staff
     * @return \Illuminate\Http\Response
     */
/******  b721898c-4bde-4d3c-a4be-2c336517e784  *******/
    public function show(Staff $staff)
    {
        return view('Staffs/Show', [
            'staff' => $staff,
            'response' => [
                'status' => 200,
                'message' => 'Staff retrieved successfully',
                'data' => $staff,
            ]
        ]);
    }
    
    public function edit(Staff $staff)
    {
        return view('Staffs/Edit', [
            'staff' => $staff,
            'response' => [
                'status' => 200,
                'message' => 'Edit form loaded successfully',
                'data' => $staff,
            ]
        ]);
    }
    
    public function update(Request $request, Staff $staff)
    {
        $request->validate([
            'nama' => 'required',
            'posisi' => 'required',
        ]);

        $staff->update($request->all());

        return redirect()->route('staffs.index')->with([
            'response' => [
                'status' => 200,
                'message' => 'Staff updated successfully',
                'data' => $staff,
            ]
        ]);
    }
    
    public function destroy(Staff $staff)
    {
        $staff->delete();
        
        return redirect()->route('staffs.index')->with([
            'response' => [
                'status' => 200,
                'message' => 'Staff deleted successfully',
            ]
        ]);
    }
}
