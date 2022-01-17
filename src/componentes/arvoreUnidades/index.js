import React from 'react';
import './style.css';

import Celula from '../celula';

const ArvoreUnidades = (props) => (
    <>
    <div class="arvores-unidades">
        <>
        <header class="arvores-unidades__titulo">
            <Celula 
                info={props.titulo}
            />
        </header>
        
        {
        props.pastas.map((e) => {
            if (e.subPastas) {
                return ( <>
                <details class="arvores-unidades__subPastas">
                    <summary class="arvores-unidades__pasta">               
                        <div class="arvores-unidades__unidades">
                            <Celula 
                            info={e.info}
                            cituacao={e.cituacao}
                            local={e.local}
                            />             
                        </div>          
                    </summary>

                    <div class="arvores-unidades__subPastas-unidades">
                        {e.subPastas.map((i) => {
                            return (
                                <div class="arvores-unidades__unidades">
                                    <Celula 
                                    info={i.info}
                                    cituacao={i.cituacao}
                                    local={i.local}
                                    />  
                                </div>
                            )
                        })}        
                    </div>
                </details>
                </> )
            }

            return (
                <div class="arvores-unidades__unidades">
                    <Celula 
                    info={e.info}
                    cituacao={e.cituacao}
                    local={e.local}
                    />
                </div>
            )     
        })
        }
        </>
    </div>
    </>
)

export default ArvoreUnidades;
