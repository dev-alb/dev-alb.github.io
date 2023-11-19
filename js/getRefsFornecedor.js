async function getRefs() {
    const db = await fetch("./js/db.json").then((response) => response.json())

    if (!!db) {
        let refs = ``

        for (const ref of db?.fornecedor?.refeicoes) {
            refs += `
                <tr id="tr-${ref?.id}">
                    <td>
                        <div class="table-button">
                            <button title="editar" onclick="handleEditRefeicao(${ref.id})" class="icon-button">
                                <img src="assets/edit.svg" alt="edit icon"/>
                            </button>
                            <button title="deletar" onclick="handleDeleteRefeicao(${ref.id})" class="icon-button">
                                <img src="assets/delete.svg" alt="menu icon"/>
                            </button>
                        </div>
                    </td>
                    <td>
                        ${ref?.id}
                    </td>
                    <td>
                        ${ref?.nome}
                    </td>
                    <td class="hide-mobile">
                        ${ref?.data}
                    </td>
                    <td class="hide-mobile">
                        ${ref?.tipo}
                    </td>
                    <td class="hide-mobile">
                        ${ref?.exibindo}
                    </td>
                </tr>
            `
        }

        document.getElementById('refs_fornecedor').innerHTML = refs
    }

}

getRefs()