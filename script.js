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
}