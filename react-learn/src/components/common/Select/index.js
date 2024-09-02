import React, { Component } from 'react'
import PropTypes from 'prop-types'
import types from '../../../utils/commonTypes'

/**
 * 一组下拉框
 */
export default class RaioBoxGroup extends Component {
  // 默认属性值
  static defaulProps = {
    datas: [],
    value: ""
  }

  static propTypes = {
    datas: types.groupDatas.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func
  }
  handleChange = e => {
    this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
  }
  // 得到一组option
  getOptions() {
    return this.props.datas.map(it => (
      <option key={it.value} value={it.value} >
        {it.text}
      </option>
    ))
  }

  render() {
    const options = this.getOptions()
    return (
      <select name={this.props.name} 
      onChange={this.handleChange}
      value={this.props.value}>
        {options}
      </select>
    )
  }
}