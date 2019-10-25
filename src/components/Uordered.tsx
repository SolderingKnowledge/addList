import React from 'react';
interface UNORED {
    delet(i:number): void;
    uordered:string[];
}

const Uordered=(props:UNORED)=>{
    const {uordered, delet } =props
    const listing = uordered.map((item:string, i:number)=>(
        <li key={i} className="listUnordered">
            <button onClick={()=>delet(i)} className="deleteButton">delete</button>
             {item}
        </li>
    ))
    return (
        <ul className = "unordered">
            {listing}
        </ul>
    )
}

export default Uordered;