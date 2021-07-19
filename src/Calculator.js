import { Component } from "react";
import Screen from "./Screen";
import CalcButton from "./CalcButton";
import "./Calculator.css";

class Calculator extends Component{
  static defaultProps = {
    calcNumber: [ '.', '00', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    calcOperator: [ 'divide', 'times', 'plus', 'minus', 'equals' ]
  }

  constructor(props){
    super(props);
    this.state = {
      calcScreen: '0'
    }
    this.clearScreen = this.clearScreen.bind(this);
    this.addOperators = this.addOperators.bind(this);
  }

  clearScreen(){
    this.setState(curState => {
      return { calcScreen: '' }
    });
  }

  addOperators(operator){
    const operators = /(\/|-|\+|\*)/g;
    if(operators.test(this.state.calcScreen) === false && this.state.calcScreen !== ''){
      switch (operator) {
        case 'divide':
          this.setState(curState => {
            return { calcScreen: `${curState.calcScreen} / ` }
          });
          break;
  
        case 'times':
          this.setState(curState => {
            return { calcScreen: `${curState.calcScreen} * ` }
          });
          break;
  
        case 'plus':
          this.setState(curState => {
            return { calcScreen: `${curState.calcScreen} + ` }
          });
          break;
  
        default:
          this.setState(curState => {
            return { calcScreen: `${curState.calcScreen} - ` }
          });
          break;
      }
    } 
    else if(operator === 'equals' && this.state.calcScreen !== '') {
      const calcScreen = [...this.state.calcScreen];
      const operand = calcScreen.splice(calcScreen.findIndex(op => op === ' ') + 1, 1);
      const firstDigitNum2 = calcScreen.findIndex(space => space === ' ') + 2;
      const num2 = parseFloat((calcScreen.splice(firstDigitNum2, calcScreen.length - firstDigitNum2)).join('').trim());
      const num1 = parseFloat(calcScreen.join('').trim());
      switch (operand[0]) {
        case "/":
          this.setState(() => {
            return { calcScreen: num1 / num2 }
          });
          break;

        case "*":
          this.setState(() => {
            return { calcScreen: num1 * num2 }
          });
          break;

        case "+":
          this.setState(() => {
            return { calcScreen: num1 + num2 }
          });
          break;
      
        case "-":
          this.setState(() => {
            return { calcScreen: num1 - num2 }
          });
          break;
      }
    }
  }

  addNumber(num){
    const operatorSigns = /(\/|-|\+|\*)/g;
    const isNumbers = /[0-9]/g;
    // const dotInNum2 = /(\/|-|\+|\*)\s{1}-?\d+/g;
    // const cannotAddDot = /(\/|-|\+|\*)\s{1}-?\d+\.{1}\d*(?=\.+)/g;
    // const notAfterOperandSign = /(-|\*|\+\/)\s{1}(?=\.+)/g;
    if(this.state.calcScreen !== "" && num === "."){
      const spreadCalcScreen = [...this.state.calcScreen];
      const findSpace = spreadCalcScreen.findIndex(element => element === " ");
      const num2 = spreadCalcScreen.slice(findSpace + 3, spreadCalcScreen.length);

      if(operatorSigns.test(spreadCalcScreen) === true && isNumbers.test(spreadCalcScreen[findSpace + 3]) === true && num2.includes('.') === false){
        return this.setState(curState => ({ calcScreen: `${curState.calcScreen}.` }));
      }
      else if(operatorSigns.test(spreadCalcScreen) === false && spreadCalcScreen.includes('.') === false){
        return this.setState(curState => ({ calcScreen: `${curState.calcScreen}.` }));
      }
    } 
    if(num !== ".") {
      this.setState(curState => ({ calcScreen: `${curState.calcScreen}${num}` }));
    }
  }

  render(){
    const operatorClass = 'fas fa-';
    return(
      <div className="Calculator">
        <Screen show={this.state.calcScreen} />
        <CalcButton 
          calcBtnClass='clear' 
          calcvalue='CLEAR' 
          btnClick={this.clearScreen} 
        />
        <div className="operators">
          {this.props.calcOperator.map(operator =>
            <CalcButton 
              calcBtnClass={operator}
              calcvalue={<i className={`${operatorClass}${operator}`}></i>}
              btnClick={() => this.addOperators(operator)}
            />
          )}
        </div>
        <div className="calcNumbers">
          {this.props.calcNumber.map(calcNum =>
            <CalcButton 
              calcBtnClass={calcNum} 
              calcvalue={calcNum} 
              btnClick={() => this.addNumber(calcNum)}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Calculator;