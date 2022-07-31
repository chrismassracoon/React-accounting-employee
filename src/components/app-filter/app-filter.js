import { Component } from 'react';
import './app-filter.css'

class AppFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clasList: {
				All: true,
				prom: false,
				over1000: false,
			}
		}
	}

	onChangeFilter = (e) => {
		const tempObj = {};
		for(let key in this.state.clasList){
			tempObj[key] = false;
			if(key === e.target.id){
				tempObj[key] = true;
				this.props.onTakePosition(key);
			}
		}
		this.setState({
		clasList : tempObj
		})
	}
	render() {
		const { All, prom, over1000 } = this.state.clasList;
		return (
			<div className="btn-group">
				<button id='All'
					className={All ? 'btn btn-light' : 'btn btn-outline-light'}
					type='button' onClick={this.onChangeFilter}>
					All employees
				</button>
				<button id='prom'
					className={prom ? 'btn btn-light' : 'btn btn-outline-light'}
					type='button' onClick={this.onChangeFilter}>
					For promotion
				</button>
				<button id='over1000'
					className={over1000 ? 'btn btn-light' : 'btn btn-outline-light'}
					type='button' onClick={this.onChangeFilter}>
					Salary over $1000
				</button>
			</div>
		);
	}
}

export default AppFilter;