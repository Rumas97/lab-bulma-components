import 'bulma/css/bulma.css';
import React from 'react'

const CoolButton =(props)=>{
    console.log(props.isDanger);
    let classbutton = 'button ';
    if(props.isPrimary){
        classbutton +='is-primary '
    }
    if(props.isSuccess){
        classbutton += 'is-success '
    }
    if(props.isDanger){
        classbutton += 'is-danger '
    }
    if(props.isSmall){
        classbutton += 'is-small '
    }
    if(props.className){
        classbutton += props.className
    }
   
    return (
        <div className = 'buttons'>
            <button className={classbutton}>{props.children}</button>
        </div>

    )
}

export default CoolButton