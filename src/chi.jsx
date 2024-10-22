import React from "react"

function Chi(props){
    return <li className="border border-2 border-success m-2 p-2">{props.v}<button className="bg-danger m-3 p-2" onClick={()=>{props.d(props.i)}}>DELETE</button>
        </li>
}
export default Chi;