import React from 'react'

export default class MyClassComp extends React.Component {
  constructor(props){
    super()
  }
  /**
   * 该方法必须返回React元素
   */
  render(){
    if(this.props.obj){
      return (
      <>
        <p>姓名：{this.props.obj.name}</p>
        <p>年龄：{this.props.obj.age}</p>
      </>
      )
    } else if(this.props.ui){
      return this.props.ui
    }
    return <h1>组件内容{this.props.number}</h1>
  }
} 