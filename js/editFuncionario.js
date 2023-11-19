async function getFuncionario () {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    const db = await fetch("./js/db.json").then((response) => response.json())

    if (!!params.id) {

        const finder = db?.funcionarios?.find(funcionario => parseInt(funcionario.id) === parseInt(params.id))

        if (!finder) {
            window.location.href = './funcionarios_cadastrados.html'
            return
        }

        document.getElementById('funcionario-nome').innerHTML = `Editar funcionário: ${finder.nome}`

        document.getElementById('ativo').checked = finder.ativo === 'Sim'
        document.getElementById('nome').value = finder.nome
        document.getElementById('cpf').value = finder.cpf
        document.getElementById('cep').value = finder.cep
        document.getElementById('estado').value = finder.estado
        document.getElementById('cidade').value = finder.cidade
        document.getElementById('bairro').value = finder.bairro
        document.getElementById('numero').value = finder.numero
        document.getElementById('complemento').value = finder.complemento

    } else {
        window.location.href = './funcionarios_cadastrados.html'
    }
}

getFuncionario()