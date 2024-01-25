let formulario = document.querySelector('#formulario');
let btnEnviar = document.querySelector('#pesquisarCep');
let logradouro = document.querySelector('#logradouro');
let complemento = document.querySelector('#complemento');
let bairro = document.querySelector('#bairro');
let localidade = document.querySelector('#localidade');
let uf = document.querySelector('#uf');
let ibge = document.querySelector('#ibge');
let gia = document.querySelector('#gia');
let ddd = document.querySelector('#ddd');
// console.log(ddd)
let siafi = document.querySelector('#siafi');
// console.log(siafi)
let ativar = document.querySelectorAll('#ativos');

function buscarCep(){
    let cep = document.forms.formulario.elements.cep.value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(body => {
        ativar.forEach((e)=>{
            e.classList.remove('ativo');
        })
        logradouro.value = body.logradouro;
        complemento.value = body.complemento;
        bairro.value = body.bairro;
        localidade.value = body.localidade;
        uf.value = body.uf;
        ibge.value = body.ibge;
        gia.value = body.gia;
        ddd.value = body.ddd;
        siafi.value = body.siafi;
    })
}

btnEnviar.addEventListener('click', buscarCep)



/* { 
"cep": "17280-276", 
"logradouro": "Rua Santos DumontOeste", 
"complemento": "de 700/701 ao fim", 
"bairro": "Jardim California",
"localidade": "Pederneiras", 
"uf": "SP", 
"ibge": "3536703", 
"gia": "5150", 
"ddd": "14", 
"siafi": "6835" }
*/