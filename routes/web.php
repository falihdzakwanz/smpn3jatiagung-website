<?php

use App\Http\Controllers\PrestasiController;
use App\Http\Controllers\EkstrakurikulerController;
use App\Http\Controllers\ModulController;
use App\Http\Controllers\StaffController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BeritaController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public Routes
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

Route::get('/staffs', [StaffController::class, 'guestIndex'])->name('staffs.guest');

Route::get('/news', [BeritaController::class, 'guestIndex'])->name('news');
Route::get('/news/{berita}', [BeritaController::class, 'show'])->name('news.show');

Route::get('/sejarah', function () {
    return Inertia::render('Sejarah');
})->name('sejarah');
Route::get('/modul', function () {
    return Inertia::render('Modules');
})->name('modul');

Route::get('/ekstrakurikuler/{id}', function () {
    return Inertia::render('ExtracurricularDetail');
})->name('ekstrakurikuler.show');

Route::get('/prestasi', function () {
    return Inertia::render('Achievements');
})->name('achievements');

// Admin Routes
Route::middleware(['auth'])->prefix('admin')->group(function () {
    // Dashboard
    Route::get('/', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');

    // Berita Management
    Route::get('/news', function() {
        return Inertia::render('Admin/News/Index');
    })->name('admin.news.index');

    // Module Management

    // News Management
    Route::controller(BeritaController::class)->group(function () {
        Route::get('/news', 'index')->name('admin.news.index');
        Route::post('/news', 'store')->name('admin.news.store');
        Route::post('/news/{berita}', 'update')->name('admin.news.update');
        Route::delete('/news/{berita}', 'destroy')->name('admin.news.destroy');
    });

    // Module Management
    Route::get('/modules', [ModulController::class, 'index'])->name('admin.modules.index');
    
    // Ekstrakurikuler Management
    Route::get('/extracurricular', [EkstrakurikulerController::class, 'index'])->name('admin.extracurricular.index');
    
    // Prestasi Management
    Route::get('/achievements', [PrestasiController::class, 'index'])->name('admin.achievements.index');
    
    // Sejarah Management
    Route::get('/history', function() {
        return Inertia::render('Admin/History/Index');
    })->name('admin.history.index');
    
    // Settings
    Route::get('/settings', function() {
        return Inertia::render('Admin/Settings/Index');
    })->name('admin.settings.index');

    // Profile
    Route::get('/profile', function() {
        return Inertia::render('Admin/Profile/Index');
    })->name('admin.profile.index');
});

// Profile & Authentication Routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
