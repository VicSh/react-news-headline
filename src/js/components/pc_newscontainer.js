import React from 'react'
import { Row, Col, Tabs, Carousel} from 'antd'
import PCNewsBlock from './pc_news_block'
import PCNewsImageBlock from './pc_news_image_block'
const TabPane  = Tabs.TabPane

export default class PCNewsContainer extends React.Component{
  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true
    }
    return(
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className="container">
            <div className="leftContainer">
              <div className="carousel">
                <Carousel {...settings}>
                  <div><h1>1</h1></div>
                  <div><h1>2</h1></div>
                  <div><h1>3</h1></div>
                  <div><h1>4</h1></div>
                </Carousel>
              </div>
              <PCNewsImageBlock count={6} type="guoji" width="400px" charTitle="国际头条" imageWidth="112px"/>
            </div>
            <Tabs className="tabs_news">
              <TabPane tab="新闻" key="1">
                <PCNewsBlock count={22} type="top" width="100%" bordered="false" />
              </TabPane>
              <TabPane tab="国际" key="2">
                <PCNewsBlock count={22} type="top" width="100%" bordered="false" />
              </TabPane>
            </Tabs>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}
