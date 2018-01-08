import React from 'react'
import { Row, Col, Menu, Icon } from 'antd'

export default class PCHeader extends React.Component{
  constructor(){
    super();
    this.state = {
      current: 'top'
    }
  }
	render(){
		return (
			<div id="mobileheader">
        <header>
          <a href="/" className="logo">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo"/>
            <span>ReactNews</span>
          </a>
        </header>
      </div>
		)
	}
}
