import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'

import Index from './index'
import ComponentList from './components/list'
export default class Root extends React.Component{
	render(){
		return (
			<Router>
				<div>
					<ul>
				      <li><Link to="/">主页</Link></li>
				      <li><Link to="/list">热门</Link></li>
				      <li><Link to="/list/aaa">热门</Link></li>
				    </ul>
				    <hr/>
					<Switch>
						<Route exact component={Index} path="/"></Route>
						<Route component={ComponentList} path="/list"></Route>
					</Switch>
				</div>
			</Router>
		)
	}
}

ReactDOM.render(
	<Root />,
	document.getElementById('example')
)
