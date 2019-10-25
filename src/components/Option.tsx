import React from 'react';

class Option extends  React.Component<any, any>{
  render(){
    const { list, change, value, select } = this.props
    const selectContent = list.map( (item:any, i:any)=>(
      <option key={i} value={item}>{item}</option>
    ))
    const empty =  !select.length ? <option key="select" value="" disabled ></option> : null;
    return (
      <div className = "option">
          <select onChange={e=>change(e.target.value)} value={value} className="select">
             {empty}
             {selectContent}
        </select>
      </div>
    )
  }

}

export default Option;