import EmployeesListItem from "../employee-list-item/employee-list-item"
import './employees-list.css'

const EmployeeList = ({ data, onDelete, onToggleProp}) => {

	const newData = data.map((item, i) => {
		const {id, ...itemProps} = item;
		return <EmployeesListItem

		 key={id} 
		 {...itemProps}
		 onDelete = {() => onDelete(id)}
		 onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
		 ></EmployeesListItem>
	})
	return (
		<ul className="app-list list-group">
			{newData}
		</ul>
	)
}


export default EmployeeList;