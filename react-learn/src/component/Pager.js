import React from 'react'
import './Pager.css'

/**
 * 分页组件
 * 属性：
 * 1. current:初始页码
 * 2. total:总数据量
 * 3. size: 页容量，每页显示的数据量
 * 4. maxShow: 数字页码最多显示多少个
 * 5. onPageChange": 当页码改变的事件
 */
export default function Pager(props) {
  const maxPage = getMaxPage(props); // 总页数
  if (maxPage === 0) {
    return null;
  }
  const min = getMinNumber(props);  //最小数字
  const max = getMaxNumber(min, maxPage, props); //最大数字
  const numbers = []
  for (let i = min; i <= max; i++) {
    numbers.push(
      <span 
      key={i}
      onClick={() => {toPage(i, props)}}
      className={i === props.current ? 'item active' : 'item'}>
        {i}
      </span>
    )
  }
  return (
    <>
      <span
        className={props.current === 1 ? 'item disabled' : 'item'}
        onClick={() => { toPage(1, props) }}>首页</span>
      <span
        className={props.current === 1 ? "item disabled" : "item"}
        onClick={() => { toPage(props.current - 1 < 1 ? 1 : props.current - 1, props) }}>上一页</span>
      {/* 数字页码 */}
      <span>{numbers}</span>
      <span
        className={props.current === maxPage ? 'item disabled' : 'item'} onClick={() => { toPage(props.current + 1 > maxPage ? maxPage : props.current + 1, props) }}>下一页</span>
      <span
        className={props.current === maxPage ? 'item disabled' : 'item'} onClick={() => { toPage(maxPage, props) }}>尾页</span>
      <span className='current'>{props.current} / {maxPage}</span>
    </>
  )
}

// 跳转到指定页码
function toPage(target, props) {
  if (target === props.current) {
    return; //目标页与当前页码相同
  }
  props.onPageChange && props.onPageChange(target)
}

// 总页数
function getMaxPage(props) {
  return Math.ceil(props.total / props.size)
}

// 计算最小数字
function getMinNumber(props) {
  let min = props.current - Math.floor(props.maxShow / 2)
  if (min < 1) {
    min = 1
  }
  return min
}

// 计算最大值
function getMaxNumber(min, maxPage, props) {
  let max = min + props.maxShow - 1
  if (max > maxPage) {
    max = maxPage
  }
  return max;
}