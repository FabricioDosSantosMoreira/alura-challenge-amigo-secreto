var nomes = [];

function renderizarLista() {
    var lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < nomes.length; i++) {
        var item = document.createElement('li');
        item.textContent = nomes[i];
        lista.appendChild(item);

        console.log(lista);
    }
}

function adicionarAmigo() {
    var input = document.getElementById('input-amigo');
    var nome = input.value;

    nomes.push(nome);
    input.value = '';

    renderizarLista();
}

function sortearAmigo() {
    var sorteado = nomes[Math.floor(Math.random() * nomes.length)];

    var resultado = document.getElementById('resultado');
    resultado.textContent = sorteado;
}
