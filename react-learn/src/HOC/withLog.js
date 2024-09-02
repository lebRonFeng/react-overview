
import React, { Component } from 'react'

/**
 * 高阶组件
 * @param {*} comp
 */
export default function withTest(Comp, str) {
  return class LogWrapper extends Component {
    componentDidMount() {
      console.log(`日志：组件${Comp.name}被创建了！${Date.now()}`)
    }

    componentWillUnmount() {
      console.log(`日志：组件${Comp.name}被销毁了！${Date.now()}`)
    }
    render() {
      return (
        <>
          {str}
          <Comp {...this.props} />
        </>
      )
    }
  }
}
