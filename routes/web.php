<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use PHPUnit\Event\Test\PostConditionErrored;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::middleware(['auth'])->group(function () {
    Route::get('posts', [PostController::class, 'index'])->name('posts');
    Route::get('post-create', [PostController::class, 'create'])->name('post-create');
    
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
