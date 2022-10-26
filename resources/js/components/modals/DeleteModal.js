import React, {Component} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class DeleteModal extends Component
{

    constructor(props){
        super(props);
    }

    // Apaga o funcionário
    deleteEmployeeData = (employee) => {
        axios.delete('/delete/employee/data/'+employee).then(() => {
            toast.error('Funcionário deletado com sucesso');

            setTimeout(() => {
                location.reload();
            },3000);
        });
    }

    render(){
        return (
            <div className="modal fade" id={"deleteModal"+this.props.modalId} tabIndex="-1" aria-labelledby="deleteModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Funcionário { this.props.employeeData.currentEmployeeId }</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Quer mesmo excluir esse funcionário?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={ () => {this.deleteEmployeeData(this.props.modalId)} }>Sim</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Não</button>
                        </div>
                    </div>
                </div>
            </div>
        );                                
    }
}

export default DeleteModal;