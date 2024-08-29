import React, { Component } from 'react'
import Modal from './common/Modal'

export default class Test extends Component {

  state = {
    showModal: false
  }

  showModal = () => {
    this.setState({
      showModal: true
    })
  }

  hideModal = () => {
    this.setState({
      showModal: false
    })
  }
  render() {

    return (
      <div>
        <h2>很久了客家话艰苦了</h2>
        {
          this.state.showModal ?
            (<Modal onClose={this.hideModal}>
              <div style={{background: '#fff'}}>
                <h1>uiuihjjhgfgh</h1>
                <button onClick={this.hideModal}>关闭蒙层</button>
              </div>
            </Modal>) : null
        }
        <button onClick={this.showModal}>显示蒙层</button>
      </div>
    )
  }
}