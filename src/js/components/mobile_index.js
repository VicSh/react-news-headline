import React from 'react'
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'

import {Tabs} from 'antd'

const TabPane = Tabs.TabPane

export default class PCIndex extends React.Component{
	render(){
		return (
			<div>
        <MobileHeader></MobileHeader>
				<Tabs>
					<TabPane tab="头条" key="1">
						123
					</TabPane>
					<TabPane tab="社会" key="2">
asd
					</TabPane>
					<TabPane tab="国内" key="3">
qwe
					</TabPane>
					<TabPane tab="国际" key="4">
dfg
					</TabPane>
					<TabPane tab="娱乐" key="5">
fghj
					</TabPane>
				</Tabs>
        <MobileFooter></MobileFooter>
      </div>
		)
	}
}
