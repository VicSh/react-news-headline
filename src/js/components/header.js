import React from 'react'
import ReactDOM from 'react-dom'
import '../../css/style.css'

export default class ComponentHeader extends React.Component {
	constructor(){
		super()
		this.state = {
			miniheader: false
		}
	}
	changeHeader(){
		this.setState({miniheader: !this.state.miniheader})
	}
	render(){
		return (
			<header className={this.state.miniheader ? ' ' : 'smallFontSize'} onClick={this.changeHeader.bind(this)}>
				<h1>这是一个头部</h1>
			</header>
		)
	}
}
