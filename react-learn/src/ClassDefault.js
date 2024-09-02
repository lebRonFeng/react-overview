import React, { Component } from 'react'

export default class ClassDefault extends Component {

  static defaultProps = {
    a: 1,
    b: 2,
    c: 3
  }

  constructor(props){
    super(props);
    console.log(props);
  }

  render(){
    return (
      <div>
        a:{this.props.a}, b:{this.props.b}, c:{this.props.c}
      </div>
    )
  }
}

// 属性默认值 [类本质上也是个函数]
// ClassDefault.defaultProps = {
//   a: 1,
//   b:2,
//   c: 3
// }