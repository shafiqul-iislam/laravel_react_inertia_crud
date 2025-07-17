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
    Route::get('create-post', [PostController::class, 'create'])->name('create-post');
    Route::post('add-post', [PostController::class, 'store'])->name('add-post');
    Route::get('edit-post/{id}', [PostController::class, 'edit'])->name('edit-post');
    Route::put('update-post', [PostController::class, 'update'])->name('update-post');
    Route::delete('delete-post/{id}', [PostController::class, 'destroy'])->name('delete-post');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
