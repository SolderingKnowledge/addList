import React from 'react';
import './App.css';
import  Option  from "./components/Option"
import  Uordered  from "./components/Uordered"

interface IFace {
  list: string[];
  select:string;
  uordered:string[];
}
class App extends  React.Component<{}, IFace>{
  constructor(props:IFace){
    super(props);
    this.state = {
      list: ["First", "Second", "Third", "Fourth"],
      select:"",
      uordered:[]
    }
  }
change=( select:string)=>{
  this.setState({
    select
  })
}
add=(value:string)=>{
  this.setState({
    uordered: [...this.state.uordered, value]
  })
}
delete =(value:any)=>{
   const {uordered} =this.state;
   const selct = uordered.slice(0,value).concat(uordered.slice(value+1))
  this.setState({
    uordered: selct
  })
}
  render(){
    return (
      <div>
        <Option list = {this.state.list}  change={this.change} value={this.state.select } select={this.state.select} />
        <button  disabled={!this.state.select.length} onClick={()=>this.add(this.state.select)} className="addButton">Add to List</button>
        <Uordered uordered={this.state.uordered} delet={this.delete}/>
      </div>
    )
  }

}

export default App;
