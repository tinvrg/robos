import React from "react";

const Scroll=(props)=>{
    return(
        <div style={{overflow: 'scroll',border:'1px dotted black',height:'600px',padding:'1rem'}}>
            {props.children}
        </div>
    )

}
export default Scroll;
