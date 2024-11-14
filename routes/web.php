<?php

use App\Http\Controllers\ProfileController;
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

Route::get('/greeting', function () {
    return Inertia::render('Greeting');
})->name('greeting');

Route::get('/staffs', function () {
    return Inertia::render('Staffs');
})->name('staffs');

Route::get('/news', function () {
    return Inertia::render('News');
})->name('news');

Route::get('/news/{id}', function ($id) {
    return Inertia::render('NewsDetail', ['id' => $id]);
})->name('news.show');

Route::get('/sejarah', function () {
    return Inertia::render('Sejarah');
})->name('sejarah');

Route::get('/modul', function () {
    return Inertia::render('Modul');
})->name('modul');

Route::get('/ekstrakurikuler/{id}', function () {
    return Inertia::render('ExtracurricularDetail');
})->name('ekstrakurikuler.show');

Route::get('/prestasi', function () {
    return Inertia::render('Achievements');
})->name('achievements');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
