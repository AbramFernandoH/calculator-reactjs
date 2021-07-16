import { Component } from "react";
import "./Screen.css";

class Screen extends Component{
  render(){
    return(
      <div className="Screen">
        <h1>{this.props.show}</h1>
      </div>
    )
  }
}

export default Screen;