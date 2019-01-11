import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default function Chart(props){
    return(
        <div>
            <Sparklines height={80} width={280} data={props.data}>
                <SparklinesLine color={props.color} style={{ strokeWidth: "0.5", fillOpacity: ".25"}} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
        </div>
    );
}