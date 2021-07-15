import { Component } from "react";
import CalcButton from './CalcButton';
import "./Calculator.css";

class Calculator extends Component{
  static defaultProps = {
    calcNumber: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    calcOperator: [ 'plus', 'divide', 'times', 'minus', 'equals' ]
  }
  
  constructor(props){
    super(props);
  }

  render(){
    const operatorClass = 'fas fa-';
    return(
      <div className="Calculator">
        <CalcButton calcBtnClass='clear' calcvalue='CLEAR' />
        <div className="operators">
          {this.props.calcOperator.map(operator =>
            <CalcButton calcBtnClass={operator.toString()} calcvalue={<i className={`${operatorClass}${operator}`}></i>} />
          )}
        </div>
        <div className="calcNumbers">
          {this.props.calcNumber.map(calcNum =>
            <CalcButton calcBtnClass={calcNum.toString()} calcvalue={calcNum} />
          )}
        </div>
        <CalcButton calcBtnClass='0' calcvalue='0' />
        <CalcButton calcBtnClass='00' calcvalue='00' />
        <CalcButton calcBtnClass='dot' calcvalue='.' />
      </div>
    )
  }
}

export default Calculator;