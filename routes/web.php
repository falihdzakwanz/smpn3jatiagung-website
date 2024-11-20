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

Route::get('/sambutan', function () {
    return Inertia::render('Greeting');
})->name('greeting');

Route::get('/staffs', [StaffController::class, 'guestIndex'])->name('staffs.guest');

Route::get('/berita', [BeritaController::class, 'guestIndex'])->name('news');

Route::get('/berita/{berita}', [BeritaController::class, 'show'])->name('news.show');

Route::get('/modul', [ModulController::class, 'guestIndex'])->name('modul.guest');

Route::get('/sejarah', function () {
    return Inertia::render('History');
})->name('history');

Route::get('/ekstrakurikuler/{ekstrakurikuler}', [EkstrakurikulerController::class, 'show'])->name('ekstrakurikuler.show');

Route::get('/prestasi', [PrestasiController::class, 'guestIndex'])->name('prestasi');


Route::middleware(['auth'])->prefix('admin')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');

    Route::controller(BeritaController::class)->group(function () {
        Route::get('/news', 'index')->name('admin.news.index');
        Route::post('/news', 'store')->name('admin.news.store');
        Route::post('/news/{berita}', 'update')->name('admin.news.update');
        Route::delete('/news/{berita}', 'destroy')->name('admin.news.destroy');
    });

    Route::controller(ModulController::class)->group(function () {
        Route::get('/modul', 'index')->name('admin.modul.index');
        Route::post('/modul', 'store')->name('admin.modul.store');
        Route::post('/modul/{modul}', 'update')->name('admin.modul.update');
        Route::delete('/modul/{modul}', 'destroy')->name('admin.modul.destroy');
    });

    Route::controller(EkstrakurikulerController::class)->group(function () {
        Route::get('/ekstrakurikuler', 'index')->name('admin.ekstrakurikuler.index');
        Route::post('/ekstrakurikuler', 'store')->name('admin.ekstrakurikuler.store');
        Route::post('/ekstrakurikuler/{ekstrakurikuler}', 'update')->name('admin.ekstrakurikuler.update');
        Route::delete('/ekstrakurikuler/{ekstrakurikuler}', 'destroy')->name('admin.ekstrakurikuler.destroy');
    });

    Route::controller(PrestasiController::class)->group(function () {
        Route::get('/prestasi', 'index')->name('admin.prestasi.index');
        Route::post('/prestasi', 'store')->name('admin.prestasi.store');
        Route::post('/prestasi/{prestasi}', 'update')->name('admin.prestasi.update');
        Route::delete('/prestasi/{prestasi}', 'destroy')->name('admin.prestasi.destroy');
    });
    
    Route::get('/settings', function() {
        return Inertia::render('Admin/Settings/Index');
    })->name('admin.settings.index');

    Route::get('/profile', function() {
        return Inertia::render('Admin/Profile/Index');
    })->name('admin.profile.index');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
