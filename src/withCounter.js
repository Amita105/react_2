import React,{Component} from "react";

const UpdatedComponent = (OriginalComponent) => {
 class NewComponent extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      
      increamentcounter = ()=>{
          this.setState(prevState => {
          return {count:prevState.count+1}
          })
  
      }
  
  render() {
    return <OriginalComponent count={this.state.count} 
    increamentcounter={this.increamentcounter}
    name="XYZ"/>
  }
}
return NewComponent
}

export default UpdatedComponent;
// now add prop name to show some difference
// to return export the HOC component
