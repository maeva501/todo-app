//implementons le dark mode 
//recuperation des id
let lune = document.getElementById("moon")
let dark = document.getElementById("dark-theme")
let todocreate = document.getElementById("todocreate")
let element = document.getElementById("Element")
let enfant = document.getElementById("enfant")
let input = document.getElementById("input")
lune.onclick = function (){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        lune.src = "/Assets/img/soleil.svg"
        dark.style.backgroundImage= "url('/Assets/img/image-dark.svg')"
        todocreate.style.backgroundColor = " #25273D"
        document.body.style.backgroundColor = " #25273D"
        element.style.backgroundColor = " #25273D"
        enfant.style.backgroundColor = " #25273D"
        input.style.color = "white"
        element.style.color = "white"
    }
    else{
        lune.src = "/Assets/img/light.svg"
        dark.style.backgroundImage= "url('/Assets/img/image1.svg')"
        todocreate.style.backgroundColor = " white"
        document.body.style.backgroundColor = "white"
        element.style.backgroundColor = "white"
        enfant.style.backgroundColor = "white"
        input.style.color = "black"
    }
}
input.addEventListener("keydown", function(event) {
    let val = input.value 
    let contenu = val

    if(contenu.length >=5){
        let select = document.getElementById("check")
        let check = document.getElementById("checkimg")
        select.style.backgroundImage = "linear-gradient(to bottom, #3710BD , #A42395)"
        check.style.display= "flex"
    }

    if (event.key === "Enter") {
        
        let val = input.value 
        let contenu = val
        if(contenu.length >=5){
        
            let newelement = enfant.cloneNode(true)
            newelement.style.display = "flex"
            let texte = newelement.querySelector("#text")
            if(texte){
                texte.innerHTML = val
            }
            element.appendChild(newelement)
            input.value = ""
            //implementation de la croix pour supprimer les taches
            let croix = document.createElement("img")
            croix.src= "./Assets/img/exit.svg"
            croix.id = "croix"
            croix.classList = "cursor pointer"
            //le mouseover
            newelement.addEventListener("mouseover", function() {
                newelement.appendChild(croix)
            });
            newelement.addEventListener("mouseleave", function() {
                newelement.removeChild(croix)
            });
            croix.addEventListener("click", () =>{
                element.removeChild(newelement)
            })
        }
        else{
            alert("le nom de la tache doit contenir au moins 5 caracteres")
        }
    }
});
