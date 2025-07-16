<?php

// class Fish
// {
//     public function swim()
//     {
//         return 'swimming';
//     }

//     public function eat()
//     {
//         return 'eating';
//     }
// }

// app()->bind('Fish', function () { // bind this with container
//     return new Fish();
// });

// class Bike
// {
//     public function start()
//     {
//         return 'starting';
//     }
// }

// app()->bind('Bike', function () { // resolve this with container
//     return new Bike();
// });


// // general facade class, as like laravel facade
// class Facade
// {
//     public static function __callStatic($name, $arguments)
//     {
//         // dynamic name of a function
//         // resolve the function with container
//         return app()->make(static::getFacadeAccessor())->$name(); // static:: as like $this
//     }

//     public function getFacadeAccessor() {}
// }



// class FishFacade extends Facade
// {
//     // override the getFacadeAccessor method
//     public function getFacadeAccessor()
//     {
//         return 'Fish';
//     }


//     // public static function __callStatic($name, $arguments)
//     // {
//     //     // $name here we pass function name, with this class resolved this Fish 
//     //     // we can get the functions of the Fish class
//     //     return app()->make('Fish')->$name();
//     // }
// }


// class BikeFacade extends Facade
// {
//     public function getFacadeAccessor()
//     {
//         return 'Bike';
//     }
// }
// dd(FishFacade::eat());
// dd(BikeFacade::start());

################################### ROUTES ###################################

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
