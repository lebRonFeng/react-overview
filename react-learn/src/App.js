import React, { Component } from 'react'
import ValidationComp from './ValidationComp'
import A from './ValidationComp'
import Comp from './Comp'
export default class App extends Component {
  render() {
    return (
      <div>
        <ValidationComp
          a={1}
          d={'ddd'}
          children={<Comp />}
          F={Comp}
          // g={new A()}
          sex="男"
          h={[3,5]} 
          i={{
            a: 233
          }}
          j={{
            a: 3,
            name: 'abc',
            age: 44,
            address:{
              province: 'asdfa',
              city: 'adsfas'
            }
          }}
          k={[{name: 'asdf', age: 33}]}
          m={23}
          score={33}/>
      </div>
    )
  }
}

