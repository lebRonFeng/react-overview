import React, { Component } from 'react'

export default class App extends Component {
  state = {
    val: 123,
    checked: true,
    selectV: 'sh'
  }

  render() {
    return (
      <div>
        <select name="city" value={this.state.selectV} onChange={e => {
          this.setState({
            selectV: e.target.value
          })
        }}>
          <option value="bj">北京</option>
          <option value="sh">上海</option>
          <option value="sz">深圳</option>
        </select>
      </div>
    )
  }
}