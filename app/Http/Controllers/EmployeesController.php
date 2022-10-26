<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Exception;
use App\Models\Employee;

class EmployeesController extends Controller
{
    // Pega os funcionários
    public function getEmployeeList(){
        try{
            $employees = Employee::orderBy('id', 'DESC')->get();
            return response()->json($employees);

        }catch(Exception $e){
            Log::error($e);
        }
    }

    // Pega um funcionário pelo ID
    public function getEmployeeDetails(Request $request){
        try{
            $employee = Employee::findOrFail($request->get('employeeId'));
            return response()->json($employee);

        }catch(Exception $e){
            Log::error($e);
        }
    }

    // Atualiza os dados do funcionário
    public function editEmployeeData(Employee $employee){
        try{
            $employeeId     = $request->get('employeeId');
            $employeeName   = $request->get('employeeName');
            $employeeSalary = $request->get('employeeSalary');

            Employee::where('id', $employeeId)->update([
                'name'   => $employeeName,
                'salary' => $employeeSalary
            ]);

            return response()->json([
                'name' => $employeeName,
                'salary' => $employeeSalary
            ]);

        }catch(Exception $e){
            Log::error($e);
        }
    }

    // Apaga um funcionário
    public function deleteEmployeeData(Employee $employee){
        try{
            $employee->delete();

        }catch(Exception $e) {
            Log::error($e);
        }
    }
}
