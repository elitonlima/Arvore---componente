import React from "react";
import './style.css';
import dados from "../dados.json";
import Celula from '../celula';
import ArvoreUnidades from "../arvoreUnidades";

const Arvore = (props) => (
    <>
    <section class="arvore">
        <header class="arvores-titulo">
            <Celula 
                info={props.titulo}
                cituacao={""}
                local={""}
            />
        </header>

        <div class="arvores-conjunto">
            {dados.map((e) => {
                return ( 
                    <ArvoreUnidades 
                        titulo={e.Titulo} 
                        pastas={e.Pastas}
                    /> 
                )
            })}
        </div>
    </section>
    </>
)

export default Arvore;