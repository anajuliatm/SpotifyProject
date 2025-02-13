import React from 'react'

const App2 = () => {
  return (
    <div>App2</div>
  )
}

export default App2;

//rafce -> ja cria automaticamente o codigo acima

//Arrow Function
/*const App2 = () => {
    console.log("Olá, Mundo!");
    return <h1>Olá, Mundo!</h1>;
  };
 */ 

  //Nomeação de Componente
  // PascalCase

  //export deafault, posso importar com qqr nome e sem chave
  //export 'sem default', só posso importar entre chaves e com o nome exportado

  //self closing tag
  //<Header></Header> ou <Header/>

  /*element.style{
    background-color:antiquewhite;
    padding:20px;
    margin:20px;
    border: solid 5px black;
    //box-sizing: content-box;
    width:50px; 
  }
  */

// Nomeação de classes em CSS
// Metodologia BEM - Blocks, Elements, Modifiers
// bloco__elemento--modificador
// header
// header__link
// header__link--small
// nomes compostos sao separados por -

// Tag vazia em react se chama Fragmente ou Fragmento

// Font Awesome - https://fontawesome.com/icons

// Componentes recebem "props" (parametros/argumentos)

//SpreadOperator
// ... 

// npm i 
// npm run dev
// npm i react-router-dom

// <BrowserRouter> = gerencia as rotas

/*
Quando componentes se re-redenrizão?
Uma das ocasiões é quando uma variável de estado usada por esse componente é atualizada
*/

// Hook - useState