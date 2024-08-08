import React from 'react';
import ReactDOM from 'react-dom';

const content = "<h1>qqqqq</h1><p>洒洒水</p>"
const div = (
  <div dangerouslySetInnerHTML={{
    __html: content
  }}>
    {/* {content} */}
  </div> 
)
ReactDOM.render(div, document.getElementById('root'))
