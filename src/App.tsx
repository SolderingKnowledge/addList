import React from 'react';
import './App.css';
import  Option  from "./components/Option"
import  Uordered  from "./components/Uordered"

interface INTER {
  list: string[];
  select:string;
  uordered:string[];
}
class App extends  React.Component<{}, INTER>{
  constructor(props:INTER){
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
delete =(value:number)=>{
   const {uordered} =this.state;
   const selct = uordered.slice(0,value).concat(uordered.slice(value+1))
  this.setState({
    uordered: selct
  })
}
  render(){
    const { uordered, list , select} = this.state;
    const listContent = !uordered.length ? <div className="emptyContainer"></div>: <Uordered uordered={uordered} delet={this.delete} />
    const addToListCN = select.length ? 'addButton' : 'addButton disabled';
    return (
      <div>
        <Option list = {list}  change={this.change} value={select } select={select} />
        <button className={addToListCN}  disabled={!select.length} onClick={()=>this.add(select)}>Add to List</button>
        { listContent }
      </div>
    )
  }

}

export default App;
