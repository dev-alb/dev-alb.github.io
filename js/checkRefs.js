function checkRefs () {
    const refs = window.localStorage.getItem(USER_MEALS)

    if (!!refs) {
        window.location.href = './refeicoes_selecionadas.html'
    }
}

checkRefs()