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

Route::get('/', function () {
    return Inertia::render('Staffs');
})->name('staffs');

Route::get('/berita', function () {
    return Inertia::render('News');
})->name('berita');

Route::get('/berita/{id}', function ($id) {
    return Inertia::render('NewsDetail', ['id' => $id]);
})->name('berita.show');

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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

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
    Route::get('/modules', function() {
        return Inertia::render('Admin/Modules/Index');
    })->name('admin.modules.index');
    
    // Ekstrakurikuler Management
    Route::get('/extracurricular', function() {
        return Inertia::render('Admin/Extracurricular/Index');
    })->name('admin.extracurricular.index');
    
    // Prestasi Management
    Route::get('/achievements', function() {
        return Inertia::render('Admin/Achievements/Index');
    })->name('admin.achievements.index');
    
    // Staff Management
    Route::get('/staff', function() {
        return Inertia::render('Admin/Staff/Index');
    })->name('admin.staff.index');
    
    // Sejarah Management
    Route::get('/history', function() {
        return Inertia::render('Admin/History/Index');
    })->name('admin.history.index');
    
    // Kontak Management
    Route::get('/contact', function() {
        return Inertia::render('Admin/Contact/Index');
    })->name('admin.contact.index');

    // Settings
    Route::get('/settings', function() {
        return Inertia::render('Admin/Settings/Index');
    })->name('admin.settings.index');

    // Profile
    Route::get('/profile', function() {
        return Inertia::render('Admin/Profile/Index');
    })->name('admin.profile.index');
});

// Authentication & Profile Routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('/dashboard/moduls', ModulController::class);
    Route::resource('/dashboard/staffs', StaffController::class);
    Route::resource('/dashboard/berita', BeritaController::class);
    Route::resource('/dashboard/ekstrakurikuler', EkstrakurikulerController::class);
    Route::resource('/dashboard/prestasi', PrestasiController::class);
});

Route::get('/staffs', [StaffController::class, 'guestIndex'])->name('staffs.guest');
Route::get('/moduls', [ModulController::class, 'guestIndex'])->name('moduls.guest');
Route::get('/berita', [BeritaController::class, 'guestIndex'])->name('berita.guest');

require __DIR__.'/auth.php';