var express = require("express"); //componente principal do node, permite que funcione o servidor todos os comandos da biblioteca express 
var app = express(); // padrão , não tem a bver com o app.js guardando a função pricipal do express 
//função que liga o servidor 
var port = process.env.PORT || 3000; // funçao especial não voui saber qual a porta vai ser liberada par mim, ele vai gerar uma porta e vai em dar

//ou do server ou uma porta 3000
//declarações mas nao tem acesso ainda 

// criar acessos 

app.get("/", function(req, res){
    res.header("Access-Control-Allow-Origin", "*")

    res.send("Olá !");
}); //Início das minhas rotas
// acessando direto e ele vai apenas me mostrar uma mensagem

//requisição quando eu mando eu recebo dados com o pedido 
// res é a resposta que eu mando , que inclusiv podem ser dados também 

app.listen(port, ( ) => {

    console.log(`Servidor rodando com a porta ${port}`)
});


//init inicia o arquivo básico do servidor
//entry point: (app.js) - IMPORTANTE => tem que bater o nome com o arquivo de base app.js
