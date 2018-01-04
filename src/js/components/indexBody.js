import React from 'react'
import ReactDOM from 'react-dom'
import BodyChild from './bodyChild'

export default class BodyIndex extends React.Component {
  constructor() {
    super()

    // state 只作用于当前的组件
    this.state = {
      username: 'Parry',
			age: 10
    }
  }

	changeUserInfo(age) {
		this.setState({age: age})
	}

	inputChangeValue(event){
		console.log('*******')
		this.setState({age: event.target.value})
	}

  render() {
    return (<div>
      <h1>这是一个body</h1>
      <p>{this.state.username} {this.props.userId} {this.state.age}</p>
			<input type="button" value="提交" onClick={this.changeUserInfo.bind(this, 99)}/>
			<BodyChild inputChangeValue={this.inputChangeValue.bind(this)}/>
    </div>)
  }
}
