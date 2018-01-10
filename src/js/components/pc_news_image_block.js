import React from 'react'
import { Card } from 'antd'

import {BrowserRouter as Router, Link} from 'react-router-dom'

export default class PCNewsImageBlock extends React.Component{
  constructor(){
    super()
    this.state = {
      news: [{
        title: '哈哈哈哈',
        uniquekey: "123"
      }]
    }
  }

  componentWillMount(){
    var myFetchOptions = {
      method: 'GET'
    }

    // fetch('http://', myFetchOptions)
    // .then(response => response.json())
    // .then(json => this.setState({news: json}))
  }
  render(){
    const styleImage = {
      display: 'block',
      width: this.props.imageWidth,
      height: '90px'
    }

    const styleH3 = {
      width: this.props.imageWidth,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
    const {news} = this.state
    const newsList = news.length
    ?
    news.map((newsItem, index) => (
      <div key={index} className="imageblock">
        <Router>
          <Link to={`details/${newsItem.uniquekey}`} target="_blank">
            <div className="custom-image">
              <img style={styleImage} src="" />
            </div>
            <div className="custom-card">
              <h3 style={styleH3}>{newsItem.title}</h3>
              <p>{newsItem.author_name}</p>
            </div>
          </Link>
        </Router>
      </div>
    ))
    :
    '没有加载任何新闻'
    return(
      <div className="topNewsList">
        <Card title={this.props.charTitle} bordered={true} style={{width: this.props.width}}>
          {newsList}
        </Card>
      </div>
    )
  }
}
