import EmployeesListItem from "../employee-list-item/employee-list-item"
import './employees-list.css'

const EmployeeList = () => {
	return (
		<ul className="app-list list-group">
			<EmployeesListItem></EmployeesListItem>
			<EmployeesListItem></EmployeesListItem>
			<EmployeesListItem></EmployeesListItem>
		</ul>
	)
}


export default EmployeeList;