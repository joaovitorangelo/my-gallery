var botaoCopiar = document.getElementById('botao-copiar');
var linkACopiar = document.getElementById('link-a-copiar');

// Adiciona um evento de clique ao botão
botaoCopiar.addEventListener('click', function() {
    // Cria um elemento de texto temporário
    var tempInput = document.createElement('input');
    tempInput.style.position = 'absolute';
    tempInput.style.left = '-9999px';
    
    // Define o valor do elemento de texto temporário como o link
    tempInput.value = linkACopiar.href; // Use .href para obter o link
    
    // Adiciona o elemento temporário ao corpo do documento
    document.body.appendChild(tempInput);
    
    // Seleciona o texto no elemento de texto temporário
    tempInput.select();
    
    // Copia o texto selecionado para a área de transferência
    document.execCommand('copy');
    
    // Remove o elemento de texto temporário
    document.body.removeChild(tempInput);
    
    // Exibe uma mensagem ou executa alguma ação após a cópia
    alert('Link copiado: ' + linkACopiar.href);
});

//vermais
function exibir(el){
    var display = document.getElementById(el).style.display;

    if (display == 'none'){
        document.getElementById(el).style.display = 'grid';
        vermais.value = 'to hide';
    } else {
        document.getElementById(el).style.display = 'none';
        vermais.value = 'load more';
    }  
}