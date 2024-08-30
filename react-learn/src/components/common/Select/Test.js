import React, { Component } from 'react'
import Select from './index'
import { getAllStudents } from '../../../services/student'
export default class Test extends Component {

  state = {
    datas: [
      { value: 'football', text: '足球' },
      { value: 'basketball', text: '篮球' },
      { value: 'movie', text: '电影' }
    ],
    value: ""
  }

  async componentDidMount(){
    try {
      const stus = await getAllStudents();
      this.setState({
        datas: stus.map(it => ({value: it.id.toString, text: it.name}))
      })
    } catch (error) {
      this.setState({
        datas: [
          { value: 'zs', text: '张三' },
          { value: 'ls', text: '李四' },
          { value: 'ww', text: '王五' }
        ]
      })
    }

  }

  render() {
    return (
      <div>
        <Select
          {...this.state}
          onChange={val => {
            this.setState({
              value: val
            })
          }}
          name="loves" />
      </div>
    )
  }
}
