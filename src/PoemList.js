import React from 'react';
import { PoemCard } from './PoemCard';

export function PoemList(props) {
    
    return (
        // console.log(props),
        <div className="ui cards" style={{ marginTop: 20 }}>
        {props.poems.map((poem, index) => (
            <PoemCard
                deletePoem={props.deletePoem}
                updatePoems={props.updatePoems}
                index={index}
                name={poem.name}
                content={poem.content}
            />
           
        ))}
        </div>
    )
}