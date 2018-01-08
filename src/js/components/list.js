import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'


import Aaa from './aaa.js'

export default class ComponentList extends React.Component {
	render(){
		return (
			<div>
				<h1>这是一个列表</h1>
				<Route component={Aaa} path="/list/aaa"></Route>
			</div>
		)
	}
}

