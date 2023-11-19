async function getFuncionarios() {
    const db = await fetch("./js/db.json").then((response) => response.json())

    if (!!db) {
        let refs = ``

        for (const ref of db?.funcionarios) {
            refs += `
                <tr id="tr-${ref?.id}">
                    <td>
                        <div class="table-button">
                            <button title="Editar" onclick="handleEditFuncionario(${ref.id})" class="icon-button">
                                <img src="../assets/edit.svg" alt="edit icon"/>
                            </button>
                            <button title="deletar" onclick="handleDeleteFuncionario(${ref.id})" class="icon-button">
                                <img src="../assets/delete.svg" alt="menu icon"/>
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
                        ${ref?.ativo}
                    </td>
                </tr>
            `
        }

        document.getElementById('funcionarios_cadastrados').innerHTML = refs
    }

}

getFuncionarios()