async function iniciaListagem(){

    const response = await fetch("https://api-aula.up.railway.app/livros")
    const livros = response.json()

    const inicioTabela = `

    <table border = "2">
        <thead>
            <tr>
                <th>ID</th>
                <th>TITULO</th>
                <th>DESCRIÇÃO</th>
            </tr>
        </thead>
    <tbody>            
    `

    let meioTabela = ``
    for (let index = 0; index < livros .length; index++) {
        meioTabela =+ `

        <tr>
            <td>${livros[index].id}</td>
            <td>${livros[index].title}</td>
            <td>${livros[index].description}</td>
        </tr>
        `
    }

    const fimTabela = `
        </tbody>
    </table>
    `

    const tabelaCompleta = inicioTabela + meioTabela + fimTabela

    document.getElementById("listaLivros").innerHTML = tabelaCompleta

}