var React = require('react')
var ReactDOM = require('react-dom')
import ComponentHeader from './components/header'
import ComponentFooter from './components/footer'
import BodyIndex from './components/indexBody'

class Index extends React.Component {
	render () {
		var componentheader = <ComponentHeader />
		return (
			<div>
				{componentheader}
				<BodyIndex  userId="111"/>
				<ComponentFooter />
			</div>
		)
	}
}

ReactDOM.render(
	<Index />,
	document.getElementById('example')
)
