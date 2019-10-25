import React from 'react';
interface OPION {
    list:string[];
    value:string;
    select:string;
    change(i:string):void;
}

const Option=  (props:OPION)=> {
      const { list, change, value, select } = props
      const selectContent = list.map( (item:any, i:any)=>(
        <option key={i} value={item}>{item}</option>
      ))
      const empty =  !select.length ? <option key="select" value="" ></option> : null;
      return (
        <div className = "option">
            <select onChange={e=>change(e.target.value)} value={value} className="select">
               {empty}
               {selectContent}
          </select>
        </div>
      )
  }
export default Option;