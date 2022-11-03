function distribuiCaracter() {
    //selecionar e guardar o valor digitado  
    var caracteres = document.getElementById('entrada').value;
    //limpar o compo de digitação 
    document.getElementById('entrada').value = '';
    //remover espaçoes em branco nas extremidades da string 
    caracteres.trim();

    //tomada de decisão - logica
    switch (caracteres) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            //adcione o caracter no campo de numeros
            document.getElementById('apenas_numeros').value+= caracteres; 
            break;
        default:
            //caso não seja número vai ser letra
            document.getElementById('apenas_letras').value+= caracteres;

    }
}