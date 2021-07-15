import { Component } from "react";
import "./Screen.css";

class Screen extends Component{
  render(){
    return(
      <div className="Screen">
        <h1>0<i className="fas fa-plus"></i><i className="fas fa-divide"></i><i className="fas fa-times"></i><i className="fas fa-minus"></i><i className="fas fa-equals"></i>9</h1>
      </div>
    )
  }
}

export default Screen;