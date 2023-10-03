'use strict'; //STRICT MODE
//CONSUMINDO API DE CEP, DO VIA CEP
//https://viacep.com.br

//FUNÇÃO P/ LIMPAR FUMLÁRIO - ARROW FUNCTION
const limparFormulario = (endereco) =>{
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    
}

//VERIFICA SE O CEP É VÁLIDO
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//FUNÇÃO RESPNSÁVEL PELO PREENCHIMENTO DO FORMULÁRIO
const preencherForm = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

//FUNÇÃO PARA CONSUMO DE API DA VIA CEP
const pesquisaCep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;

    if(cepValido(cep.value)){
        const dados = await fetch(url); // esperar
        const addres = await dados.json(); // retorna dados no formato JSON 

        if(addres.hasOwnProperty('erro')){
            alert('CEP NÃO ENCONTRADO! DIGITE UM CEP EXISTENTE.');
        }else{
            preencherForm(addres);
        }
    }else{
        alert('CEP INCORRETO!');
    }
}

//ADICIONA UM EVENTO DOM NO INPUT DO CEP
document.getElementById('cep').addEventListener('focusout',pesquisaCep);