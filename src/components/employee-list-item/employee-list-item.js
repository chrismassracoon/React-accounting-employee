
import { Component } from 'react';
import './employee-list-item.css'

class EmployeesListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			increase: false,
			spanClasses: false,

		}
	}

	onIncrease = () => {
		this.setState(({ increase }) => ({
			increase: !increase,
		}))
	}

	doLike = () => {
		this.setState(({ spanClasses}) => ({
			spanClasses: !spanClasses,
		}))
		
	}
	render() {
		const { name, surname, salary, onDelete } = this.props;
		const { increase, spanClasses} = this.state;
		let classNames = "list-group-item d-flex justify-content-between";
		if (increase) {
			 classNames += ' increase';
		}
		if (spanClasses) {
			 classNames += ' like';
		}
		return (
			<li className={classNames}>
				<span className='list-group-item-label' onClick={this.doLike}>{name} {surname}</span>
				<input type="text" className={"list-group-item-input"} defaultValue={salary + '$'} />
				<div className='d-flex justify-content-center align-items-center'>
					<button type="button"
						className="btn-cookie btn-sm "
						onClick={this.onIncrease}>
						<i className="fas fa-cookie"></i>
					</button>

					<button type="button"
						className="btn-trash btn-sm " onClick={onDelete}>
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star"></i>
				</div>
			</li>
		)
	}
}

export default EmployeesListItem;