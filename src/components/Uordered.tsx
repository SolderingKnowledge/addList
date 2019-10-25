import React from 'react';

class Uordered extends  React.Component<any, any>{
  render(){
      const {uordered, delet } =this.props
    const listing = uordered.map((item:any, i:any)=>(
        <div key={i} className="list_uordered">
            <button onClick={()=>delet(i)} className="deleteButton">delete</button>
              {item}
        </div>
      ))
    return (
      <div className = "uordered">
          {listing}
      </div>
    )
  }

}

export default Uordered;