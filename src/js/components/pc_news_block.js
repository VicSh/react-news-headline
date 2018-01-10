import React from 'react'
import { Card } from 'antd'

import {BrowserRouter as Router, Link} from 'react-router-dom'

export default class PCNewsBlock extends React.Component{
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
    const {news} = this.state
    const newsList = news.length
    ?
    news.map((newsItem, index) => (
      <li key={index}>
        <Router>
          <Link to={`details/${newsItem.uniquekey}`} target="_blank">
            {newsItem.title}
          </Link>
        </Router>
      </li>
    ))
    :
    '没有加载任何新闻'
    return(
      <div className="topNewsList">
        <Card>
          <ul>
            {newsList}
          </ul>
        </Card>
      </div>
    )
  }
}
