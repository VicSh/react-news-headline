import React from 'react'
import { Row, Col, Menu, Icon, Tabs, message,Form, Input, Button, CheckBox, Modal } from 'antd'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const FormItem = Form.Item
const SubMenu = Menu.SubMenu
const TabPane = Tabs.TabPane
const MenuItemGroup = Menu.ItemGroup

class MobileHeader extends React.Component{
  constructor(){
    super();
    this.state = {
      current: 'top',
      modalVisible: false,
      action: 'login',
      hasLogined: false,
      userNickName: '',
      userId: 0
    }
  }
  setModalVisible(value){
    this.setState({modalVisible: value})
  }

  handleClick(e){
    if (e.key) {
      this.setState({current: 'register'})
      this.setModalVisible(true)
    } else {
      this.setState({current: e.key})
    }
  }

  handleSubmit(e){
    // 页面开始向api进行提交数据
    e.preventDefault()
    var myFetchOptions = {
      method: 'GET'
    }

    var formData = this.props.form.getFieldsValue()
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
    + "&username="+formData.userName+"&password="+formData.password
    +"&r_userName=" + formData.r_userName + "&r_password="
    + formData.r_password + "&r_confirmPassword="
    + formData.r_confirmPassword, myFetchOptions).
    then(response => response.json()).
    then(json => {
      this.setState({userNickName: json.NickUserName, userId: json.UserId})
    })
    if (this.state.action=="login") {
      this.setState({hasLogined:true});
    }
    message.success('请求成功！')
    this.setModalVisible(false)
  }

  login(){
    this.setModalVisible(true)
  }

  callback(key) {
    if (key == 1) {
      this.setState({action: 'login'});
    } else if (key == 2) {
      this.setState({action: 'register'});
    }
  };

	render(){
    let {getFieldDecorator} = this.props.form
    const userShow = this.state.hasLogined ?
    <Router>
      <Link to="/">
        <Icon type="inbox"/>
      </Link>
    </Router>
    :
    <Icon type="setting" onClick={this.login.bind(this)}/>;
		return (
			<div id="mobileheader">
        <header>
          <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo"/>
          <span>ReactNews</span>
          {userShow}
        </header>
        <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={() => {this.setModalVisible(false)}} onOk={() => {this.setModalVisible(false)}} cancelText="取消" okText="关闭">
          <Tabs type="card" onChange={this.callback.bind(this)}>
            <TabPane tab="登录" key="1">
              <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="账户">
                  {getFieldDecorator('userName')(<Input placeholder="请输入您的账号" />)}
                </FormItem>
                <FormItem label="密码">
                  {getFieldDecorator('password')(<Input type="password" placeholder="请输入您的密码" />)}
                </FormItem>
                <Button type="primary" htmlType="submit">登录</Button>
              </Form>
            </TabPane>
            <TabPane tab="注册" key="2">
              <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="账户">
                  {getFieldDecorator('r_userName')(<Input placeholder="请输入您的账号" />)}
                </FormItem>
                <FormItem label="密码">
                  {getFieldDecorator('r_password')(<Input type="password" placeholder="请输入您的密码" />)}
                </FormItem>
                <FormItem label="确认密码">
                  {getFieldDecorator('r_confirmPassword')(<Input  type="password" placeholder="请再次输入您的密码" />)}
                </FormItem>
                <Button type="primary" htmlType="submit"> 注册 </Button>
              </Form>
            </TabPane>
          </Tabs>
        </Modal>
      </div>
		)
	}
}

export default MobileHeader = Form.create({})(MobileHeader)
