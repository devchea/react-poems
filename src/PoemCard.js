import React from 'react';
import { EditPoemButton } from './EditPoemButton';

export function PoemCard(props){
    return (
        // console.log(props),
        <div className="ui card">
            <div className="content">
                <div className="header">{props.name}</div>
            </div>
            <div className="content">
                {props.content}
            </div>
            <div className="content">
                <button className="ui red button" onClick={() => props.deletePoem(props.name)}>Delete</button>
                <EditPoemButton poem={props} updatePoems={props.updatePoems}/>
            </div>
        </div>
    )
}