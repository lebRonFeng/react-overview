import React, { Component } from 'react'

export default class App extends Component {
  state = {
    val: 123,
    checked: true,
    loves: ['足球', '篮球', '音乐', '其他'],
    chooseLoves: ['篮球', '音乐']
  }

  render() {
    const checkboxs = this.state.loves.map(it => (<label key={it}>
      <input type="checkbox" checked={this.state.chooseLoves.includes(it)} onChange={e => {
        if (e.target.checked) {
          this.setState({
            chooseLoves: [...this.state.chooseLoves, it]
          })
        } else {
          this.setState({
            chooseLoves: this.state.chooseLoves.filter(l => l !== it)
          })
        }
      }} />
      {it}
    </label>))

    return (
      <div>
        { checkboxs }
        <button onClick={() => {
          console.log(this.state.chooseLoves)
        }}>获取选中的值</button>
      </div>
    )
  }
}