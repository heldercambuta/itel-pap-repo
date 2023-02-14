<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiresource('admins', 'App\Http\Controllers\AdminController');
Route::apiresource('medicos', 'App\Http\Controllers\MedicoController');
Route::apiresource('pacientes', 'App\Http\Controllers\PacienteController');
Route::apiresource('status', 'App\Http\Controllers\EstadoSaudeController');
Route::post('login', 'App\Http\Controllers\AuthController@login');
Route::post('logout', 'App\Http\Controllers\AuthController@logout');