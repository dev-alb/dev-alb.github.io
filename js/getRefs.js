function getRefs () {
    let refs = window.localStorage.getItem(USER_MEALS)

    if (!!refs) {
        refs = JSON.parse(refs)

        document.getElementById('cafe-text-description').innerHTML = `Pão com mortadela e café com leite, você${!refs.cafe ? ' não' : ''} optou por essa refeição`
        document.getElementById('almoco-text-description').innerHTML = `Arroz, strogonoff, batata palha e coca-cola, você${!refs.almoco ? ' não' : ''} optou por essa refeição`
        document.getElementById('jantar-text-description').innerHTML = `Sopa de legumes com carne, você${!refs.jantar ? ' não' : ''} optou por essa refeição`
    } else {
        window.location.href = './funcionario_refeicoes.html'
    }
}

getRefs()