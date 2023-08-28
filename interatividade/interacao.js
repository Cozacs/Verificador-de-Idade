function verificarIdade() {
    var ano = document.querySelector(`input#iano`);
    var anoNasc = Number(ano.value);
    var data = new Date();
    var anoAtual = data.getFullYear();
    var idade = anoAtual-anoNasc;
    var sexohomem = document.querySelector(`input#masc`);
    idadeValida(anoNasc, idade)
    fotoIdadeSexo(sexohomem, idade);
}

function fotoIdadeSexo(sexohomem, idade) {
    var imagem = document.querySelector(`img#img`);
    if (sexohomem.checked) {
        if (idade < 15) {
            imagem.src = "imagens/bebe-m.jpg";
        } else if (idade < 30) {
            imagem.src = "imagens/jovem-m.jpg";
        } else if (idade < 50) {
            imagem.src = "imagens/adulto-m.jpg";
        } else {
            imagem.src = "imagens/idoso.jpg";
        }
    } else {
        if (idade < 15) {
            imagem.src = "imagens/bebe-f.jpg";
        } else if (idade < 30) {
            imagem.src = "imagens/jovem-f.jpg";
        } else if (idade < 50) {
            imagem.src = "imagens/adulto-f.jpg";
        } else {
            imagem.src = "imagens/idosa.jpg";
        }
    }
}

function idadeValida(anoNasc, idade) {
    var img = document.getElementById(`foto`);
    if (anoNasc <= 1900 || anoNasc > 2023) {
        img.style.display = "none";
        msg.innerHTML = "Ano de Nascimento Invalido";
        return false;
    } else {
        img.style.display = "flex";
        msg.innerHTML = `A sua idade é ${idade} anos`;
        return true;
    }
}
