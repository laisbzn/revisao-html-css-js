document.getElementById("btnCadastrar").addEventListener("click", iniciarProcessoCadastro);

async function iniciarProcessoCadastro() {
    const titulo = document.getElementById("titulo").value;
    const descricao = document.getElementById("descricao").value;
    const mensagemDiv = document.getElementById("mensagem");

    // Verifica se ambos os campos estão preenchidos
    if (titulo.trim() === "" || descricao.trim() === "") {
        mensagemDiv.textContent = "Falha no cadastro: Preencha todos os campos.";
        mensagemDiv.style.color = "red";
        return;
    }

    const URL = "https://api-aula.up.railway.app/livros";
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: titulo,
            description: descricao
        })
    };

    try {
        const response = await fetch(URL, options);

        // Verifica se a requisição foi bem-sucedida (status 200-299)
        if (response.ok) {
            mensagemDiv.textContent = "Cadastrado com sucesso!";
            mensagemDiv.style.color = "green";

            // Limpa os campos após o cadastro
            document.getElementById("titulo").value = "";
            document.getElementById("descricao").value = "";
        } else {
            mensagemDiv.textContent = "Falha no cadastro: Erro ao enviar os dados.";
            mensagemDiv.style.color = "red";
        }
    } catch (error) {
        mensagemDiv.textContent = "Falha no cadastro: Erro na conexão.";
        mensagemDiv.style.color = "red";
    }
}
