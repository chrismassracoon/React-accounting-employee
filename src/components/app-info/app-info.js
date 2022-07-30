
import './app-info.css'

const AppInfo = ({employees, awarded}) => {
	return (
		<div className="app-info">
			<h1>Employee Accounting </h1>
			<h2>Total number of employees: {employees}</h2>
			<h2>Number of nominees for the award: {awarded}</h2>
		</div>
	)
}

export default AppInfo;