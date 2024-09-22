async function iniciarProcessoCadastro(){

    const titulo = document.getElementById("titulo").value
    const descricao = document.getElementById("descricao").value

    const URL = "https://api-aula.up.railway.app/livros"
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: titulo,
            description: descricao
        })
    }

    const response = await fetch(url, options)
}