import React, { Component } from 'react'
import {A, B} from './components/Comps';
import withLog from './HOC/withLog'
import withLogin from './HOC/withLogin'
let AComp = withLogin(withLog(A, 'asd'))
let BComp = withLogin(withLog(B, 'kkk'))
export default class App extends Component {
  render() {
    return (
      <div>
        <AComp isLogin a={1}/>
        <BComp isLogin b={1}/>
      </div>
    )
  }
}

