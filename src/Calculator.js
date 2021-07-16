import { Component } from "react";
import CalcButton from './CalcButton';
import "./Calculator.css";

class Calculator extends Component{
  static defaultProps = {
    calcNumber: [ '.', '00', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    calcOperator: [ 'divide', 'times', 'plus', 'minus', 'equals' ]
  }

  render(){
    const operatorClass = 'fas fa-';
    return(
      <div className="Calculator">
        <CalcButton 
          calcBtnClass='clear' 
          calcvalue='CLEAR' 
          btnClick={this.props.clearScreen} 
        />
        <div className="operators">
          {this.props.calcOperator.map(operator =>
            <CalcButton 
              calcBtnClass={operator}
              calcvalue={<i className={`${operatorClass}${operator}`}></i>}
            />
          )}
        </div>
        <div className="calcNumbers">
          {this.props.calcNumber.map(calcNum =>
            <CalcButton 
              calcBtnClass={calcNum} 
              calcvalue={calcNum} 
            />
          )}
        </div>
      </div>
    )
  }
}

export default Calculator;