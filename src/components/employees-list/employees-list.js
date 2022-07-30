import EmployeesListItem from "../employee-list-item/employee-list-item"
import './employees-list.css'

const EmployeeList = ({ data, onDelete }) => {

	const newData = data.map((item, i) => {
		const {id, ...itemProps} = item;
		return <EmployeesListItem

		 key={id} 
		 {...itemProps}
		 onDelete = {() => onDelete(id)}
		 ></EmployeesListItem>
	})
	return (
		<ul className="app-list list-group">
			{newData}
		</ul>
	)
}


export default EmployeeList;