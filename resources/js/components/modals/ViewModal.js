import React, {Component} from 'react';

class ViewModal extends Component
{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="modal fade" id={"viewModal"+this.props.modalId} tabIndex="-1" aria-labelledby="viewModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Employee { this.props.employeeData.currentEmployeeId }</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Name: <strong>{ this.props.employeeData.currentEmployeeName }</strong><hr></hr>
                            Salary: <strong>R${ this.props.employeeData.currentEmployeeSalary },00</strong>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );                                
    }
}

export default ViewModal;