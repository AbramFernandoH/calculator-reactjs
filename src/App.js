import { Component } from "react";
import Screen from "./Screen";
import Calculator from "./Calculator";
import "./App.css";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      calcScreen: '0'
    }
    this.clearScreen = this.clearScreen.bind(this);
  }

  clearScreen(){
    this.setState(curState => {
      return { calcScreen: '' }
    });
  }

  render(){
    return(
      <div className="App">
        <h1 className="title">Calculator using Reactjs</h1>
        <Screen show={this.state.calcScreen} />
        <Calculator 
          clearScreen={this.clearScreen}
        />
      </div>
    )
  }
}

export default App;