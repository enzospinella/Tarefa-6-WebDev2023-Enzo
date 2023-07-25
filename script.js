document.addEventListener('DOMContentLoaded', async () => {
    let res = await fetch("https://api.github.com/users/enzospinella");
    let json = await res.json();
    console.log(json)

    let conteudo = document.querySelector("#conteudo")
    conteudo.innerHTML += "<p><a href='"+json.html_url+"'>" + json.login + "</a></p>"
    conteudo.innerHTML += "<p>" + json.name + "</p>"
    conteudo.innerHTML += "<p>" + json.bio + "</p>"
    let data = json.created_at.split("-");
    data = data[2].split("T")[0] + "/" + data[1] + "/" + data[0]
    conteudo.innerHTML += "<p>" + data + "</p>"

    let avatar = document.querySelector("#avatar")
    avatar.firstElementChild.src = json.avatar_url
    avatar.lastElementChild.textContent = json.name
});

function changeDarkLightMode() {
    const button = document.getElementById("dark-light-mode")
    const body = document.body
    const menu = document.getElementById("topo")
    const itensMenu = document.getElementById("topo-conteudo").children

    if(button.firstElementChild.innerHTML == "Dark Mode") {
        button.firstElementChild.innerHTML = "Light Mode"
        button.style.backgroundColor = "black"
        button.style.color = "white"
        
        body.style.backgroundColor = "black"
        body.style.color = "yellow"

        menu.style.backgroundColor = "yellow"
        menu.style.color = "black"

        for (let item of itensMenu) {
            if(item.id == "")
                item.style.color = "black"
        }
    }
    else {
        button.firstElementChild.innerHTML = "Dark Mode"
        button.style.backgroundColor = "white"
        button.style.color = "black"

        body.style.backgroundColor = "yellow"
        body.style.color = "black"

        menu.style.backgroundColor = "black"
        menu.style.color = "yellow"

        for (let item of itensMenu) {
            if(item.id == "")
                item.style.color = "yellow"
        }
    }
    const titulosCard = document.getElementsByClassName("titulo-card")
    for (let titulo of titulosCard)
        titulo.style.color = "black"
    const githubItens = document.getElementById("github-desc")
    for (let item of githubItens.children)
        item.style.color = "black"
}