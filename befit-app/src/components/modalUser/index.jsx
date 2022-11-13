
import React, { useEffect, useState } from "react"
import api from '../../services/api.js'
import CardExercicio from '../CardExercicio/index'


function ModalUser(props) {

    const titulos = [
        {
            id: 1,
            title: 'Pesquisar treinos',

        },
        {

            id: 2,
            title: 'Meus Treinos',

        },
        {

            id: 3,
            title: 'Criar Treinos',

        },
        {
            id: 4,
            title: 'Dietas',

        }
    ]

    const pageAtual = (window.location.pathname);


    const nomeFiltrado = titulos.filter(titulos => {
        switch (pageAtual) {
            case '/usuario/exercicios':
                return titulos.title === 'Pesquisar treinos';


            case '/usuario/meustreinos':
                return titulos.title === 'Meus Treinos';


            case '/usuario/criar/treinos':
                return titulos.title === 'Criar Treinos';


            case '/usuario/dietas':
                return titulos.title === 'Dietas';


            default:
                console.log('teste');

        }
    });



    const [treinos, setTreinos] = useState([]);



    useEffect(() => { listar() }, [])

    function listar() {
        console.log("Requisição está sendo feita: ");
        const treinos = api.get('http://localhost:8080/treinos')
        treinos                               // invocando o método "get" do axios utilizando a URL base instanciada em "api.js"
            .then(function (respostaObtida) {       // método get responde uma Promise que será resolvida, e quando obtiver uma resposta, cairá no "then" recebendo a resposta como parâmetro
                console.log(respostaObtida.data);   // exibindo o atributo "data", que possui o vetor de dados do objeto de resposta que foi recebido
                setTreinos(respostaObtida.data);    // utilizando o setter para alterar o valor do estado (useState) de "musicas"        
            })
            .catch((errorOcorrido) => {             // caso a requisição falhe, o "catch" pegará o erro, recebendo como parâmetro de uma função
                console.log(errorOcorrido)          // exibindo o erro que ocorreu na requisição
            });
    }
    return (
        <>
            <div className="identificacaoModal">{nomeFiltrado.map((item) =>
                <h1>{item.title} </h1>
            )}

            </div>
            <div className="modal">

                {
                    treinos.map((treinos, index) => {
                        return (

                            <CardExercicio
                                key={treinos.id}
                                id={treinos.id} // passando id da música
                                nome={treinos.nome}
                                descricao={treinos.descricao}
                                imagem={treinos.imagem}
                            />
                        );
                    })
                }
            </div>


        </>
    )
}


export default ModalUser