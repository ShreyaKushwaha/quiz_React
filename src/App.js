import './App.css';
import Points from "./components/Points";
import Question from "./components/Question";
import data from "./components/Data"
import React from "react";




class App extends React.Component {
  constructor(){
    super()
    this.state = {
      id : 0,
      ca : 0
      
      
    };
    this.clickHandler = this.clickHandler.bind(this)
    this.Handler = this.Handler.bind(this)
    
  }

  clickHandler(){
    this.setState(prevState => {
        return{
          id : prevState.id + 1
       }
   }) 
  }

  Handler(e){
    const bvalue = e.target.value  ;
    this.setState(prevState => {
      if(bvalue == data[this.state.id].answer)
        return{
          ca : prevState.ca + 1,
          id : prevState.id + 1
          
        }
      else 
        return{
          id : prevState.id + 1
        }
        
    }) 
  }

render(){
  return (
    <div className="App">
      <Points  d ={data[this.state.id].answer} dataa = {this.state.id + 1}ca = {this.state.ca}/>
      <Question dataa = {data[this.state.id]}/>
      <div className="btns">
            <button className="btn" value={data[this.state.id].op1} onClick={this.Handler}>{data[this.state.id].op1}</button>
            <button className="btn" value={data[this.state.id].op2} onClick={this.Handler}>{data[this.state.id].op2}</button>
            <button className="btn" value={data[this.state.id].op3} onClick={this.Handler}>{data[this.state.id].op3}</button>
            <button className="btn" value={data[this.state.id].op4} onClick={this.Handler}>{data[this.state.id].op4}</button>
      </div>
      <button className="next" onClick={this.clickHandler}>Next Question</button>
    </div>
  );
}

}

export default App;

