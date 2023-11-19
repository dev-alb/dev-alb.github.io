async function seeRef () {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    const db = await fetch("./js/db.json").then((response) => response.json())

    if (!!params.id) {

        const finder = db?.refeicoes_fornecedor?.find(ref => parseInt(ref.id) === parseInt(params.id))

        if (!finder) {
            window.location.href = './refeicoes_por_fornecedor.html'
            return
        }

        document.getElementById('ref-title').innerHTML = `Detalhes ${finder.nome}`
        document.getElementById('fornecedor-text').innerHTML = `Fornecedor: ${finder.fornecedor}`
        document.getElementById('total-funcionarios').innerHTML = `Total de funcionarios que consumiram essa refeição: ${finder.total_func}`
        document.getElementById('gasto-total').innerHTML = `Gasto total: ${finder.gasto_total}`
        document.getElementById('media').innerHTML = `Média por funcionário: ${finder.media}`

    } else {
        window.location.href = './refeicoes_por_fornecedor.html'
    }
}

seeRef()