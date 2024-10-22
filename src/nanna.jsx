
import React from "react";
import Chi from "./chi";
function Nanna(){
    var [n,setN]=React.useState(["goto gym","goto park","goto pasalapudi","don't goto hyd","pasalapudi"])
    var iref=React.useRef();
     var nref=React.useRef();
     var bnre=React.useRef();

    function del(i){
        var temp=[...n];
        temp.splice(i,1)
        setN([...temp])
    }

    React.useEffect(()=>{
  nref.current.focus();
    },[])

    function che(e){
        if(e.key==="Enter"){
            bnre.current.focus();
        }
    }

    function de(){
        var v1=document.getElementById("d2").value;
        setN([...n,v1]);

    }
    

    return <div >
        <input type="text" name="" id="d2" ref={nref} onKeyUp={(e)=>{che(e)}}/>
        <button ref={bnre} onClick={()=>{de()}}>ADDTODO</button>
        {
           
            n.map((t,i)=>{
                return <div >
                    
                    <Chi v={t} d={del} i={i}> </Chi>
                    </div>
            })
        }

        
        </div>
}
export default Nanna; 