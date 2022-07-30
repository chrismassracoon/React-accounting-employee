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
					rise:true,
					increase: false,
					id: 1
				},
				{
					name: 'Osvald',
					surname: 'Fries',
					salary: '3500',
					rise:false,
					increase: false,
					id: 2
				},
				{
					name: 'Jack',
					surname: 'Jonson',
					salary: '1800',
					rise:false,
					increase: true,
					id: 3
				},
				{
					name: 'Jack',
					surname: 'Jonson',
					salary: '1800',
					rise:false,
					increase: false,
					id: 4
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
			rise: false,
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

	onToggleProp = (id, prop) => {
		// this.setState(({data}) => {
		// 	const index = data.findIndex(elem => elem.id === id);

		// 	const old = data[index];
		// 	const newItem = {...old, increase: !old.increase};
		// 	const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
		// 	return {
		// 		data: newArr
		// 	}
		// })
		this.setState(({data}) => ({
			data: data.map(item => {
				if(item.id === id) {
					return {...item, [prop]: !item[prop]}
				}
				return item;
			})
		}))
	}

	render() {
		const employees = this.state.data.length;
		const awarded = this.state.data.filter(item => item.increase).length;
		return (
			<div className="App">
				<AppInfo 
				employees={employees}
				awarded={awarded}/>

				<div className="search-panel">
					<SearchPanel></SearchPanel>
					<AppFilter></AppFilter>
				</div>
				<EmployeeList data={this.state.data}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				></EmployeeList>
				<EmployeeAddForm onAdd={this.addItem}></EmployeeAddForm>
			</div>
		)
	}
}

export default App;