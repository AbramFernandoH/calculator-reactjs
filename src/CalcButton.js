import { Component } from "react";
import "./CalcButton.css";

class CalcButton extends Component{
  static defaultProps = {
    calcBtnClass: '1',
    calcvalue: 1
  }
  render(){
    return(
      <button onClick={this.props.btnClick} className={`CalcButton-${this.props.calcBtnClass}`}>{this.props.calcvalue}</button>
    )
  }
}

export default CalcButton;