<?php

use App\Http\Controllers\PrestasiController;
use App\Http\Controllers\EkstrakurikulerController;
use App\Http\Controllers\ProfileController;
use App\Models\Ekstrakurikuler;
use App\Models\Prestasi;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    /* Ekstrakurikuler */
    Route::get('/ekstrakurikuler', [EkstrakurikulerController::class, 'index'])->name('ekstrakurikuler.edit');
    Route::post('ekstrakurikuler/{id}', [EkstrakurikulerController::class, 'store'])->name('ekstrakurikuler.store');
    Route::patch('/ekstrakurikuler/{id}', [EkstrakurikulerController::class, 'update'])->name('ekstrakurikuler.update');
    Route::delete('ekstrakurikuler/{id}', [EkstrakurikulerController::class, 'destroy'])->name('ekstrakurikuler.destroy');
    /* Prestasi */
    Route::get('prestasi', [PrestasiController::class, 'index'])->name('prestasi.edit');
    Route::post('prestasi/{id}', [PrestasiController::class, 'store'])->name('prestasi.store');
    Route::patch('/prestasi/{id}', [PrestasiController::class, 'update'])->name('prestasi.update');
    Route::delete('/prestasi/{id}', [PrestasiController::class, 'destroy'])->name('prestasi.destroy');
});

require __DIR__.'/auth.php';
