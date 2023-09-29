'use strict'; //STRICT MODE

//FUNÇÃO P/ LIMPAR FUMLÁRIO - ARROW FUNCTION
const limparFormulario = (endereco) => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}