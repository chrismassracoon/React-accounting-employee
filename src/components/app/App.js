import { Component } from 'react';


import './App.css';
import '../app-filter/app-filter'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employees-list/employees-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					name: 'Alex',
					surname: 'Stivenson',
					salary: '2000',
					increase: false,
					id: 1
				},
				{
					name: 'Osvald',
					surname: 'Fries',
					salary: '3500',
					increase: false,
					id: 2
				},
				{
					name: 'Jack',
					surname: 'Jonson',
					salary: '1800',
					increase: true,
					id: 3
				},
				{
					name: 'Jack',
					surname: 'Jonson',
					salary: '1800',
					increase: false,
					id: 4
				},
				{
					name: 'Jack',
					surname: 'Jonson',
					salary: '1800',
					increase: false,
					id: 5
				},
				{
					name: 'Jack',
					surname: 'Jonson',
					salary: '1800',
					increase: false,
					id: 6
				},
			]
		}
		this.maxId = 4;
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			// const index = data.findIndex(elem => elem.id == id);

			// const before = data.slice(0, index);
			// const after = data.slice(index + 1);

			// const newArr = [...before, ...after];



			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}

	addItem = (firstname, salary) => {
		const [name, surname] = firstname.split(' ');
		const newItem = {
			name,
			surname,
			salary,
			increase: false,
			id: this.maxId++
		}
		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		})
	}

	render() {
		return (
			<div className="App">
				<AppInfo />

				<div className="search-panel">
					<SearchPanel></SearchPanel>
					<AppFilter></AppFilter>
				</div>
				<EmployeeList data={this.state.data}
					onDelete={this.deleteItem}
				></EmployeeList>
				<EmployeeAddForm onAdd={this.addItem}></EmployeeAddForm>
			</div>
		)
	}
}

export default App;