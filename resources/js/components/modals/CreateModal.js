import axios from 'axios';
import React, {Component} from 'react';

class CreateModal extends Component
{

    constructor(props){
        super(props);

        this.state = {
            employeeName: null,
            employeeSalary: null
        }
    }

    // Cria o nome e o salário do funcionário
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

    // Salva os dados do novo funcionário
    storeEmployeeData = () => {
        axios.post('/store/employee/data', {
            employeeName: this.state.employeeName,
            employeeSalary: this.state.employeeSalary
        }).then(() => {
            toast.success('Funcionário cadastrado com sucesso');

            setTimeOut(() => {
                location.reload();
            },3000);
        });
    }

    render(){
        return (
        <>    
            <div className="mb-3">
                <button className="btn btn-success text-right" data-bs-toggle="modal" data-bs-target="#modalCreate">
                    Add employee
                </button>
            </div>
            <div className="modal fade" id="modalCreate" tabIndex="-1" aria-labelledby="#modalCreate" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add employee</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="form">
                                <div className="form-group">
                                    <input type="text" id="name" className="form-control mb-2" name="name" placeholder="Nome do funcionário" onChange={this.inputEmployeeName}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="salary" className="form-control mb-2" name="salary" placeholder="Salário do funcionário" onChange={this.inputEmployeeSalary}/>
                                </div>
                                <div className="modal-footer">
                                    <input type="submit" className="btn btn-success" value="Salvar" onClick={this.storeEmployeeData}/>
                                </div>
                            </form>                            
                        </div>
                    </div>
                </div>
            </div>
        </> 
        );                                
    }
}

export default CreateModal;