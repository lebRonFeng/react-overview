import React, { Component } from 'react'
import CheckBoxGroup from './index'
import { getAllStudents } from '../../../services/student'
export default class Test extends Component {

  state = {
    datas: [
      { value: 'zs', text: '张三' },
      { value: 'ls', text: '李四' },
      { value: 'ww', text: '王五' }
    ],
    chooseDatas: []
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
        <CheckBoxGroup
          {...this.state}
          onChange={newArr => {
            this.setState({
              chooseDatas: newArr
            })
          }}
          name="loves" />
      </div>
    )
  }
}
