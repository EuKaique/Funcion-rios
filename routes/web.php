<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeesController;


Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/get/employee/list', [EmployeesController::class, 'getEmployeeList'])->name('employee.list');

Route::post('/get/individual/employee/details', [EmployeesController::class, 'getEmployeeDetails'])->name('employee.detail');
Route::post('/store/employee/data',  [EmployeesController::class, 'storeEmployeeData'])->name('employee.create');
Route::post('/update/employee/data', [EmployeesController::class, 'editEmployeeData'])->name('employee.update');

Route::delete('/delete/employee/data/{employee}', [EmployeesController::class, 'deleteEmployeeData'])->name('employee.delete');


