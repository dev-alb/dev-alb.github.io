async function checkUser() {
    let user = window.localStorage.getItem(USER_INFO)

    const db = await fetch("./js/db.json").then((response) => response.json())

    if (!user || !db) {
        window.localStorage.removeItem(USER_INFO)
        window.location.href = './login/'
    } else {
        user = JSON.parse(user)

        const pagesWithAccess = pages.find(page => page.tipo_usuario === user.tipo)

        const find = pagesWithAccess.paginas.find(page => window.location.pathname.includes(page.link))

        if (!find) {
            window.location.href = `./${pagesWithAccess.default}`
        }
    }
}

checkUser()