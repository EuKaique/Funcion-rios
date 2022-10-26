import React, {Component} from 'react';
import ViewModal from '../modals/ViewModal';
import EditModal from '../modals/EditModal';
import DeleteModal from '../modals/DeleteModal';

class TableActionButtons extends Component
{

    constructor(props){
        super(props);

        this.state = {
            currentEmployeeId: null,
            currentEmployeeName: null,
            currentEmployeeSalary: null
        }
    }

    // Pegando dados de um funcionário
     getEmployeeDetails = (id) => {
        let self = this;

        axios.post('/get/individual/employee/details', {
            employeeId: id
        }).then((response) => {
            self.setState({
                currentEmployeeId: response.data.id,
                currentEmployeeName: response.data.name,
                currentEmployeeSalary: response.data.salary
            });
        });
     }

    render(){
        return (
            <div className="btn-group" role="group">
                {/*Visualizar*/}
                <button type="button" className="btn btn-primary" 
                        data-bs-toggle="modal" data-bs-target={"#viewModal"+this.props.eachRowId} 
                        onClick={ () => { this.getEmployeeDetails(this.props.eachRowId) }} >
                View
                </button>
                <ViewModal modalId={ this.props.eachRowId } employeeData={ this.state }/>
                {/*Editar*/} 
                <button type="button" className="btn btn-secondary"
                        data-bs-toggle="modal" data-bs-target={"#editModal"+this.props.eachRowId} 
                        onClick={ () => { this.getEmployeeDetails(this.props.eachRowId) }} >
                Edit
                </button>
                <EditModal modalId={ this.props.eachRowId } employeeData={ this.state }/>
                {/*Deletar*/}
                <button type="button" className="btn btn-danger"
                        data-bs-toggle="modal" data-bs-target={"#deleteModal"+this.props.eachRowId} 
                        onClick={ () => { this.getEmployeeDetails(this.props.eachRowId) }}>
                Delete
                </button>
                <DeleteModal modalId={ this.props.eachRowId } employeeData={ this.state }/>
            </div>
        );                                
    }
}

export default TableActionButtons;