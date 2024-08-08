import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

const url = "https://n.sinaimg.cn/sinakd20201217ac/213/w2048h1365/20201217/50db-kfnaptt5979574.jpg"
const cls = "image"
const div = (
  <div>
    <img src={url} className={cls} style={{
      marginLeft: "50px",
      width: "300px"
    }} alt="" />
  </div> 
)
ReactDOM.render(div, document.getElementById('root'))
