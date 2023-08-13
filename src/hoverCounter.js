import React, { Component } from 'react'
import UpdatedComponent from './withCounter'



 class HoverCounter extends Component {


    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count:0
    //     }
    //   }
      
      // increamentcounter = ()=>{
      //     this.setState(prevState => {
      //     return {count:prevState.count+1}
      //     })
      
      // }
     render() {
      // const {count} = this.state;
      const {count, increamentcounter} = this.props;
    return (
      <div>
         {/* click handler on the button */}
        {/* in the onclick handler it is going to be just increamentcounter but not this.increamentcounter */}
        <h1 onMouseOver={increamentcounter}> hovered {count} times  </h1>
      </div>
    )
  }
}

// export default HoverCounter;
export default UpdatedComponent(HoverCounter);
