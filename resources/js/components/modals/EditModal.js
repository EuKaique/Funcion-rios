import React, {Component} from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class EditModal extends Component
{

    constructor(props){
        super(props);

        this.state = {
            employeeName: null,
            employeeSalary: null
        }
    }

    //Atualiza dinâmicamente o nome e o salário do funcionário
    inputEmployeeName = (event) => {
        this.setState({
            employeeName: event.target.value
        });
    }

    inputEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value
        });
    }

    static getDerivedStateFromProps(props, current_state){
        let employeeUpdate = {
            employeeName: null,
            employeeSalary: null
        }

        // Atualizando os dados dos inputs
        if(current_state.employeeName && (current_state.employeeName !== props.employeeData.currentEmployeeName)){
            return null;
        }
        if(current_state.employeeSalary && (current_state.employeeSalary !== props.employeeData.currentEmployeeSalary)){
            return null;
        }

        // Atualizando os dados via props
        if(current_state.employeeName !== props.employeeData.currentEmployeeName || current_state.employeeName === props.employeeData.currentEmployeeName){
            employeeUpdate.employeeName = props.employeeData.currentEmployeeName;
        }
        if(current_state.employeeSalary !== props.employeeData.currentEmployeeSalary || current_state.employeeSalary === props.employeeData.currentEmployeeSalary){
            employeeUpdate.employeeSalary = props.employeeData.currentEmployeeSalary;
        }

        return employeeUpdate;
    }

    // Função que edita os dados do funcionário
    editEmployeeData = () => {
        axios.post('/update/employee/data', {
            employeeId: this.props.modalId,
            employeeName: this.state.employeeName,
            employeeSalary: this.state.employeeSalary

        }).then(() => {
            toast.success('Funcionário atualizado com sucesso');

            setTimeOut(() => {
                location.reload();
            },3000);
        });    
    }

    render(){
        return (
            <div className="modal fade" id={"editModal"+this.props.modalId} tabIndex="-1" aria-labelledby="editModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Employee { this.props.employeeData.currentEmployeeId }</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="form">
                                <div className="form-group">
                                    <input type="text" id="name" className="form-control mb-2" name="name" value={this.state.employeeName ?? ""} onChange={this.inputEmployeeName}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="salary" className="form-control mb-2" name="salary" value={this.state.employeeSalary ?? ""} onChange={this.inputEmployeeSalary}/>
                                </div>
                                <div className="modal-footer">
                                    <input type="submit" className="btn btn-success" value="Editar" onClick={this.editEmployeeData}/>
                                </div>
                            </form>    
                        </div>

                    </div>
                </div>
            </div>
        );                                
    }
}

export default EditModal;