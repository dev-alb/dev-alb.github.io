async function getRef () {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    const db = await fetch("./js/db.json").then((response) => response.json())

    if (!!params.id) {

        const finder = db?.fornecedor?.refeicoes?.find(refeicao => parseInt(refeicao.id) === parseInt(params.id))

        if (!finder) {
            window.location.href = './refeicoes_cadastradas.html'
            return
        }

        document.getElementById('refeicao-nome').innerHTML = `Editar refeição: ${finder.nome}`

        document.getElementById('nome').value = finder.nome
        document.getElementById('preco').value = finder.preco
        document.getElementById('tipo').value = finder.tipo
        document.getElementById('exibindo').checked = finder.exibindo === 'Sim'

    } else {
        window.location.href = './refeicoes_cadastradas.html'
    }
}

getRef()