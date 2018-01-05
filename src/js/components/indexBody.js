import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import BodyChild from './bodyChild'

import ReactMixin from 'react-mixin'

import MixinLog from './mixin'

import { Button, Input } from 'antd';

const defaultProps = {
  username: 'haha'
}

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

    this.refs.ress.style.color = 'red'

    MixinLog.log()
	}

	inputChangeValue(event){
		console.log('*******')
		this.setState({age: event.target.value})
	}

  render() {
    return (<div>
      <h1>这是一个body</h1>
      <p>{this.props.username} {this.props.userId} {this.state.age}</p>
			<input id="examp" ref="ress" type="button" value="提交" onClick={this.changeUserInfo.bind(this, 99)}/>
			<Input placeholder="Basic usage" />
      <Button type="primary">Primary</Button>
      <BodyChild {...this.props} id={4} inputChangeValue={this.inputChangeValue.bind(this)}/>
    </div>)
  }
}

BodyIndex.propTypes = {
  userId: PropTypes.number.isRequired
}

BodyIndex.defaultProps = defaultProps

ReactMixin(BodyIndex.prototype, MixinLog)
