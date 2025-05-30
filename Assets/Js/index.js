//implementons le dark mode 
//recuperation des id
let lune = document.getElementById("moon")
let dark = document.getElementById("dark-theme")
let todocreate = document.getElementById("todocreate")
let element = document.getElementById("Element")
let enfant = document.getElementById("enfant")
let input = document.getElementById("input")
let todo = document.getElementById("todo")
let check2 = document.getElementById("checkimg")
let tables = document.getElementById("tables")
let alltables = document.getElementById("alltables")
let all1 = document.getElementById("all1")
let active1 = document.getElementById("active1")
let completed1 = document.getElementById("completed1")
let all2 = document.getElementById("all2")
let active2 = document.getElementById("active2")
let completed2 = document.getElementById("completed2")
let all = []
let active = []
let completed = []

let Tab = []
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
        todo.style.color = "#25273D"
        check2.style.display = "none"
    }
    else{
        lune.src = "/Assets/img/light.svg"
        dark.style.backgroundImage= "url('/Assets/img/image1.svg')"
        todocreate.style.backgroundColor = " white"
        document.body.style.backgroundColor = "white"
        element.style.backgroundColor = "white"
        enfant.style.backgroundColor = "white"
        input.style.color = "black"
        todo.style.color = "white"
        check2.style.display = "none"

    }
}
function afficherListe(liste) {
    // Masque tous les éléments de la table "Tab"
    Tab.forEach(item => item.style.display = "none");  // "item" représente ici chaque élément qui passe dans la fonction
    // On affiche unique les élément du tableau que l'on souhaite afficher ; les autres sont masqués
    liste.forEach(item => item.style.display = "flex");

    // État initial de couleur si ce n'est pas activé
    let ensemble = [all1, all2, active1, active2, completed1, completed2]; // prend en compte tous les id dont la couleur change à l'état "active"
    ensemble.forEach(element => {
        element.style.color = "#5B5E7E"
    });
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
        
        //implementation de la tache
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
            element.insertBefore(newelement , tables)
            input.value = ""
            all.push(newelement)
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
                        //cocher les taches
            let select = newelement.querySelector("#select")
            let checkimg1 = newelement.querySelector("#checkimg1")
            let p = newelement.querySelector("#text")
            select.addEventListener("click" , () => {
                select.classList.toggle("active");
                if(select.classList.contains("active")){
                        p.style.textDecoration = "line-through"
                        checkimg1.style.display = "flex"
                        p.style.color = "#B0B0B0"
                        select.style.backgroundImage = "linear-gradient(to bottom, #3710BD , #A42395)"
                        if (!all.includes(newelement)) all.push(newelement); // Ajout de l'élément dans le tableau "all"
                        if (!completed.includes(newelement)) completed.push(newelement)
                }
                else{
                        p.style.textDecoration = "none"
                        checkimg1.style.display = "none"
                        p.style.color = "black "
                        select.style.backgroundImage =""//reinicialiser la couleur du texte
                }
            })
            input.value = "";
            check.style.backgroundImage = "none";
            element.style.display = "flex"
            Tab.push(newelement);        }
        else{
            alert("le nom de la tache doit contenir au moins 5 caracteres")
        }
    }
    all1.addEventListener("click", () => {
        afficherListe(all);
        all1.style.color = "#A42395";
        all2.style.color = "#5B5E7E";
        active1.style.color = "#5B5E7E";
        active2.style.color = "#5B5E7E";
        completed1.style.color = "#5B5E7E";
        completed2.style.color = "#5B5E7E";
    })  
    /

});
