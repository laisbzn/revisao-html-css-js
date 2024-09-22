async function iniciaListagem() {
    try {
        const response = await fetch("https://api-aula.up.railway.app/livros");
        const livros = await response.json(); // Obtendo os dados corretamente com await

        if (livros.length === 0) {
            document.getElementById("listaLivros").innerHTML = "<p>Nenhum livro cadastrado.</p>";
            return;
        }

        // Início da tabela
        const inicioTabela = `
        <table border="2">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TÍTULO</th>
                    <th>DESCRIÇÃO</th>
                </tr>
            </thead>
            <tbody>
        `;

        // Construção das linhas da tabela com os livros
        let meioTabela = '';
        livros.forEach(livro => {
            meioTabela += `
            <tr>
                <td>${livro.id}</td>
                <td>${livro.title}</td>
                <td>${livro.description}</td>
            </tr>
            `;
        });

        // Fim da tabela
        const fimTabela = `
            </tbody>
        </table>
        `;

        // Montando a tabela completa e inserindo no HTML
        const tabelaCompleta = inicioTabela + meioTabela + fimTabela;
        document.getElementById("listaLivros").innerHTML = tabelaCompleta;

    } catch (error) {
        console.error("Erro ao buscar livros:", error);
        document.getElementById("listaLivros").innerHTML = "<p>Erro ao carregar a listagem de livros.</p>";
    }
}
