async function getRefeicoes() {
    const db = await fetch("./js/db.json").then((response) => response.json())

    if (!!db) {
        let refs = ``

        for (const ref of db?.refeicoes_fornecedor) {
            refs += `
                <tr id="tr-${ref?.id}">
                    <td>
                        <div class="table-button">
                            <button title="Detalhes" onclick="handleSeeRef(${ref.id})" class="icon-button">
                                <img width="15" height="15" src="../assets/eye.svg" alt="edit icon"/>
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
                        ${ref?.fornecedor}
                    </td>
                    <td class="hide-mobile">
                        ${ref?.ativo}
                    </td>
                </tr>
            `
        }

        document.getElementById('refeicoes_por_fornecedor').innerHTML = refs
    }

}

getRefeicoes()