
import ExercicioCover from '../../components/Exercicios/index.jsx';
import React, { useEffect, useState } from "react"
import api from '../../services/api.js'



function ModalUser(props) {
    const [lista, setLista] = useState([]);

    useEffect(() => { listarImagens() }, [])
    function listarImagens() {
        api.get().then((response) => {
            console.log('teste', response.data)
            setLista(response.data);
        })
            .catch((erro) => {
                console.log(erro)
            })
    };
    return (
        <>
            <div className="identificacaoModal"><h1>Pesquisar treinos</h1>

            </div>
            <div className="modal">
                <div className="boxTreino">
                    <div id="boxCover">
                        {lista.map((valor) => {
                            return (
                                <ExercicioCover key={valor.id}
                                    id={valor.id}
                                    nome={valor.nome}

                                />
                            );
                        })}
                    </div>
                </div>
            </div>


        </>
    )
}

export default ModalUser