async function getFornecedores() {
    const db = await fetch("./js/db.json").then((response) => response.json())

    if (!!db) {
        let refs = ``

        for (const ref of db?.fornecedores) {
            refs += `
                <tr id="tr-${ref?.id}">
                    <td>
                        <div class="table-button">
                            <button title="Editar" onclick="handleEditFornecedor(${ref.id})" class="icon-button">
                                <img src="../assets/edit.svg" alt="edit icon"/>
                            </button>
                            <button title="deletar" onclick="handleDeleteFornecedor(${ref.id})" class="icon-button">
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

        document.getElementById('fornecedores_cadastrados').innerHTML = refs
    }

}

getFornecedores()