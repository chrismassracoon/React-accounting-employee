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
					name: 'Alex Stivenson',
					salary: '2000',
					rise: true,
					increase: false,
					id: 1
				},
				{
					name: 'Osvald Fries',
					salary: '3500',
					rise: false,
					increase: false,
					id: 2
				},
				{
					name: 'Jack Jonson',
					salary: '1800',
					rise: false,
					increase: true,
					id: 3
				},
			],
			term: '',
			filterPos: 'all'
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

	addItem = (name, salary) => {
		const newItem = {
			name,
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
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] }
				}
				return item;
			})
		}))
	}

	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter(item => {
			return item.name.indexOf(term) > -1
		})
	}

	onUpdateSearch = (term) => {
		this.setState({ term });
	}

	onFilterData = (position) => {
		const { data, term } = this.state;
		if(position === 'all'){
		return	this.searchEmp(data, term)
		} else if (position === 'prom') {
		return	this.searchEmp(data, term).filter(item => {
			return	item.rise === true
			})
		}
		else if (position === 'over1000') {
			return	this.searchEmp(data, term).filter(item => {
				return	item.salary >= 1000;
				})
	}
	 else {
		return	this.searchEmp(data, term);
	 }
}

onTakePosition = (pos) => {
	this.setState({filterPos : pos})
}
	render() {
		const pos = this.state.filterPos;
		const employees = this.state.data.length;
		const awarded = this.state.data.filter(item => item.increase).length;
		const visibleData = this.onFilterData(pos);
		return (
			<div className="App">
				<AppInfo
					employees={employees}
					awarded={awarded} />

				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch}></SearchPanel>
					<AppFilter onTakePosition={this.onTakePosition}></AppFilter>
				</div>
				<EmployeeList data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				></EmployeeList>
				<EmployeeAddForm onAdd={this.addItem}></EmployeeAddForm>
			</div>
		)
	}
}

export default App;