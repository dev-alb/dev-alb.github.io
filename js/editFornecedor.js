async function getFornecedor () {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    const db = await fetch("./js/db.json").then((response) => response.json())

    if (!!params.id) {

        const finder = db?.fornecedores?.find(fornecedor => parseInt(fornecedor.id) === parseInt(params.id))

        if (!finder) {
            window.location.href = './fornecedores_cadastrados.html'
            return
        }

        document.getElementById('fornecedor-nome').innerHTML = `Editar fornecedor: ${finder.nome}`

        document.getElementById('ativo').checked = finder.ativo === 'Sim'
        document.getElementById('nome').value = finder.nome
        document.getElementById('cnpj').value = finder.cnpj
        document.getElementById('cep').value = finder.cep
        document.getElementById('estado').value = finder.estado
        document.getElementById('cidade').value = finder.cidade
        document.getElementById('bairro').value = finder.bairro
        document.getElementById('numero').value = finder.numero
        document.getElementById('complemento').value = finder.complemento

    } else {
        window.location.href = './fornecedores_cadastrados.html'
    }
}

getFornecedor()