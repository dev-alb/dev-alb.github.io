async function userLogin(e) {
    const login = e?.target[0]?.value
    const pass = e?.target[1]?.value

    const db = await fetch("../js/db.json").then((response) => response.json())

    const finder = db.users.find(user => user.email === login && user.senha === pass)

    if (!finder) {
        window.alert('E-mail e/ou senha incorreto(s).')
    } else {
        window.localStorage.setItem(USER_INFO, JSON.stringify(finder))

        window.location.href = `../${pages.find(page => page.tipo_usuario === finder.tipo).default}`
    }
}

async function loginBiometria() {
    const user = {
        "id": "02",
        "nome": "Funcionario",
        "tipo": "02",
        "email": "funcionario@fortes.com",
        "senha": "func"
    }

    window.localStorage.setItem(USER_INFO, JSON.stringify(user))

    window.location.href = '../funcionario_refeicoes.html'
}

function logout () {
    window.localStorage.removeItem(USER_INFO)
    window.localStorage.removeItem(USER_MEALS)
    window.location.href = `./login`
}

function confirmMeals () {
    const cafeValues = document.getElementsByName('cafe-option')
    const almocoValues = document.getElementsByName('almoco-option')
    const jantarValues = document.getElementsByName('jantar-option')

    const userAccepts = {
        cafe: cafeValues[0]?.checked ? 1 : 0,
        almoco: almocoValues[0]?.checked ? 1 : 0,
        jantar: jantarValues[0]?.checked ? 1 : 0
    }

    window.localStorage.setItem(USER_MEALS, JSON.stringify(userAccepts))

    window.location.href = './refeicoes_selecionadas.html'
}

function handleDeleteRefeicao (id) {
    const text = `Deseja deletar a refeição ${id}?`;

    if (confirm(text) === true) {
        document.getElementById(`tr-${id > 10 ? id : `0${id}`}`).style.display = 'none'
        alert('Refeição deletada com sucesso!')
    }
}

function handleNewRef () {
    window.location.href = './cadastrar_refeicao.html'
}

function handleConfirmNewRef (edit) {
    alert(`Refeição ${edit ? 'atualizada' : 'cadastrada'} com sucesso!`)
    window.location.href = './refeicoes_cadastradas.html'
}

function handleEditRefeicao (id) {
    window.location.href = `editar_refeicao.html?id=${id}`
}

function toggleMenu () {
    document.getElementById('menu').classList.toggle('open-menu')
}

function handleNewFornecedor () {
    window.location.href = './cadastrar_fornecedor.html'
}

function handleDeleteFornecedor (id) {
    const text = `Deseja deletar o fornecedor ${id}?`;

    if (confirm(text) === true) {
        document.getElementById(`tr-${id > 10 ? id : `0${id}`}`).style.display = 'none'
        alert('Fornecedor deletado com sucesso!')
    }
}

function handleConfirmNewFornecedor (edit) {
    alert(`Fornecedor ${edit ? 'atualizado' : 'cadastrado'} com sucesso!`)
    window.location.href = './fornecedores_cadastrados.html'
}

function handleEditFornecedor (id) {
    window.location.href = `editar_fornecedor.html?id=${id}`
}

function handleNewFuncionario () {
    window.location.href = './cadastrar_funcionario.html'
}

function handleDeleteFuncionario (id) {
    const text = `Deseja deletar o funcionário ${id}?`;

    if (confirm(text) === true) {
        document.getElementById(`tr-${id > 10 ? id : `0${id}`}`).style.display = 'none'
        alert('Funcionário deletado com sucesso!')
    }
}

function handleEditFuncionario (id) {
    window.location.href = `editar_funcionario.html?id=${id}`
}

function handleSeeRef (id) {
    window.location.href = `detalhes_da_refeicao.html?id=${id}`
}