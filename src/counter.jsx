import React from "react";


function Counter(){
    var [c ,setC]=React.useState(0);
    function inc(){
        setC(c+1);
    }

    function dec(){
        setC(c-1);
    }
    function rec(){
        setC(c=0);
    }
    return <div>
        <h1>COUNTER:{c}</h1>
        <button onClick={()=>(inc())} className="m-3 p-2">increment</button>
        <button onClick={()=>(dec())} className="m-3 p-2">decrement</button>
        <button onClick={()=>(rec())} className="m-3 p-2">reset</button>
    </div>
      
}

export default Counter;