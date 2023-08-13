import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

 class Countclick extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count:0
    //   }
    // }
    
    // increamentcounter = ()=>{
    //     this.setState(prevState => {
    //     return {count:prevState.count+1}
    //     })
    // }

  render() {
    // const {count} = this.state
    const {count, increamentcounter} = this.props
    return (
      <div>
        {/* click handler on the button */}
        {/* in the onclick handler it is going to be just increamentcounter but notthis.increamentcounter */}
        <button onClick={increamentcounter}> clicked {count} times</button>
      </div>
    )
  }
}

// export default Countclick
export default UpdatedComponent(Countclick);
