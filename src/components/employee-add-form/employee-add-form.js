import { Component } from 'react';

import './employee-add-form.css'
class EmployeeAddForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			salary:  '',
		}
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value,
		})
	}
	addData = (e) => {
			e.preventDefault();
			if(this.state.name && this.state.salary){
			this.props.onAdd(this.state.name, this.state.salary);
			this.setState({
            name: '',
            salary: ''
        })
		}
	}
	
	render() {

		const {name, salary} = this.state;
		return (
			<div className="app-add-form">
				<h3>Add new employee</h3>
				<form
				onSubmit={this.addData}
					className="add-form d-flex">
					<input type="text"
						className="form-control new-post-label"
						placeholder="Enter name"  onChange={this.onValueChange} name='name' value={name}/>
					<input type="number"
						className="form-control new-post-label"
						placeholder="Salary" onChange={this.onValueChange}  name='salary' value={salary}/>
	
					<button type="submit"
						className="btn btn-outline-light">Add</button>
				</form>
			</div>
		)
	}
}

export default EmployeeAddForm;