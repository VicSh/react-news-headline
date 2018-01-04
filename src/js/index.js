var React = require('react')
var ReactDOM = require('react-dom')
import ComponentHeader from './components/header'

class Index extends React.Component {
	render () {
		return (
			<ComponentHeader/>
		)
	}
}

ReactDOM.render(
	<Index/>, 
	document.getElementById('example')
)