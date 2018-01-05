import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import Index from './index'
import ComponentList from './components/list'
export default class Root extends React.Component{
	render(){
		return (
			<Router>
				<div>
					<Route component={Index} path="/"></Route>
					<Route component={ComponentList} path="/list"></Route>
				</div>
			</Router>
		)
	}
}

ReactDOM.render(
	<Root />,
	document.getElementById('example')
)
