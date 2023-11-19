const STORAGE_PREFIX = 'fortes@::'
const USER_INFO = `${STORAGE_PREFIX}user_info`
const USER_MEALS = `${STORAGE_PREFIX}user_meals`

const pages = [
    {
        tipo_usuario: '01',
        default: 'fornecedores_cadastrados.html',
        paginas: [
            {
                nome: 'Fornecedores',
                link: 'fornecedores_cadastrados.html'
            },
            {
                nome: 'Cadastrar fornecedor',
                link: 'cadastrar_fornecedor.html'
            },
            {
                nome: 'Editar fornecedor',
                link: 'editar_fornecedor.html'
            },
            {
                nome: 'Funcionários',
                link: 'funcionarios_cadastrados.html'
            },
            {
                nome: 'Cadastrar Funcionário',
                link: 'cadastrar_funcionario.html'
            },
            {
                nome: 'Editar Funcionário',
                link: 'editar_funcionario.html'
            },
            {
                nome: 'Refeições por fornecedor',
                link: 'refeicoes_por_fornecedor.html'
            },
            {
                nome: 'Detalhes da refeição',
                link: 'detalhes_da_refeicao.html'
            }
        ]
    },
    {
        tipo_usuario: '02',
        default: 'funcionario_refeicoes.html',
        paginas: [
            {
                nome: 'Refeições',
                link: 'funcionario_refeicoes.html'
            },
            {
                nome: 'Refeições selecionadas',
                link: 'refeicoes_selecionadas.html'
            }
        ]
    },
    {
        tipo_usuario: '03',
        default: 'refeicoes_cadastradas.html',
        paginas: [
            {
                nome: 'Refeições',
                link: 'refeicoes_cadastradas.html'
            },
            {
                nome: 'Cadastrar refeição',
                link: 'cadastrar_refeicao.html'
            },
            {
                nome: 'Editar refeição',
                link: 'editar_refeicao.html'
            },
            {
                nome: 'Visualizar demanda',
                link: 'visualizar_demanda.html'
            }
        ]
    }
]