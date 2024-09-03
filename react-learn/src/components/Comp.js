import React, { Component } from 'react'

// class A extends Component {
//   method(){
//     console.log('调用了A组件的方法')
//   }
//   render(){
//     return <h1>组件A</h1>
//   }
// }

// function B(){
//   return <h1>组件B</h1>
// }
export default class Comp extends Component {
  constructor(props) {
    super(props)
    this.txt = React.createRef();
    // 或者也可以这样写 
    // this.txt = {
    //   current: null
    // }
    this.state = {
      show: false
    }
  }

  handleClick = () => {
    // this.txt.current.focus();
    // this.txt.focus();
    this.setState({
      show: !this.state.show
    })
    // this.setState({})
  }

  componentDidMount(){
    console.log('didMount', this.txt)
  }

  getRef = el => {
    console.log('函数被调用了', el);
    this.txt = el
  }
  render() {
    return (
      <div>
        {this.state.show && <input type="text" ref={this.getRef} />}
        <button onClick={this.handleClick}>显示/隐藏</button>
      </div>
    )
  }
}
