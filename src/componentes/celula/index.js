import React from 'react';
import './style.css';

const Celula = (props) => (
    <div class="celula">
        <>
        { !props.cituacao && !props.local ? ( 
            <h1>
                {props.info}
            </h1>
            ) : ( <>
            <div data-status={props.cituacao.toLowerCase()} class="arvores-unidades__unidades__status">
                {props.cituacao}
            </div>

            <div class="arvores-unidades__unidades__ministro">
                {props.info}
            </div>

            <div data-local={props.local.toLowerCase()} class="arvores-unidades__unidades__local">
                {props.local.substring(0,2)}
            </div>
            </> ) }
        </>
    </div>
)

export default Celula;
