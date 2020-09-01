import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export class UpdateEmployeeComponent extends Component {
    constructor(props){
        super (props)
        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            email: ''
        }   
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.updateEmployee=this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res)=>{
            let employee=res.data;
            this.setState({firstName:employee.firstName,
                            lastName:employee.lastName,
                            email: employee.email
                        });

        });
    }

    updateEmployee=(e)=>{
        e.preventDefault();
        let employee = {firstname:this.state.firstName,lastname:this.state.lastName,email:this.state.email};
        console.log('empoyee =>'+JSON.stringify(employee));
        
        EmployeeService.updateEmployee(employee, this.state.id).then(res=>{
            this.props.history.push('/employees');
        })
    }

    cancel(){
        this.props.history.push('/employees');
    }
    changeFirstNameHandler=(event)=>{
        this.setState({firstName: event.target.value});}
    changeLastNameHandler=(event)=>{
        this.setState({lastName: event.target.value});}
    changeEmailHandler=(event)=>{
        this.setState({email: event.target.value})}

    
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body"></div>
                            <form>
                                <div className="form-group">
                                <label>First Name</label>
                                <input placeholder="First Name" name="firstName"className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Last Name</label>
                                <input placeholder="Last Name" name="lastName"className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Email Id</label>
                                <input placeholder="Email" name="email"className="form-control" value={this.state.email} onChange={this.changeEmailHandler}/>
                                </div>
                                <button className="btn btn-success" onClick={this.updateEmployee}>save</button>
                                <button className="btn btn-Danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent
