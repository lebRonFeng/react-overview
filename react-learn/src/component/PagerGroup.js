import React, { Component } from 'react'
import Pager from './Pager'

export default class PagerGroup extends Component{
  state = {
    current: 1,
    total: 89,
    size: 10,
    maxShow: 5
  }
  handlePageChange = (newPage) => {
    this.setState({
      current: newPage
    })
  }
  render(){
    return (<Pager {...this.state} onPageChange={ this.handlePageChange}/>)
  }
} 