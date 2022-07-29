
import './App.css';
import '../app-filter/app-filter'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employees-list/employees-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

function App() {
	return (
		<div className="App">
			<AppInfo />

			<div className="search-panel">
				<SearchPanel></SearchPanel>
				<AppFilter></AppFilter>
			</div>
			<EmployeeList></EmployeeList>
			<EmployeeAddForm></EmployeeAddForm>
		</div>
	);
}

export default App;