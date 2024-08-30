import React, { Component } from 'react'
// import NumberInput from './components/NumberInput'

export default class App extends Component {
  state = {
    val: 123,
    checked: true
  }
 
  render(){
    return (
      <div>
        {/* 默认情况下，它是一个非受控组件 */}
        {/* <input type="text" value={this.state.val} onChange={ e => {
          this.setState({
            val: e.target.value
          })
        }}/>

        <button onClick={() => {
          console.log(this.state.val)
        }}>获取文本框的值</button> */}
        {/* <NumberInput/> */}
        <input type="checkbox" checked={this.state.checked} onChange={e => {
          this.setState({
            checked: e.target.checked
          })
        }}/>
      </div>
    )
  }
}