//Insertion des images et événement au click


//Recherche des données images
const images = [
    "normandy",
    "grass",
    "illos",
    "redmoon",
    "selenee"
];
//Recherche des données titres -en attente
const titles = [
    "Normandy SR1",
    "Planète inconnue",
    "Illos",
    "Lune rouge",
    "Sélénée"
]

//Logique d'application et écouteur d'événement click
for (let image of images) {
    const panel = createPanel(image);
    panel.addEventListener('click', function() {
        ///panels.forEach(p => p.classList.remove('active')); en attente
        panel.classList.add('active');
    });
}

//Fonction de création des panels
function createPanel(img) {
    const panelDiv = document.createElement('div');//créer un élément div
    panelDiv.style = "background-image: url(img/" + img + ".png)";//lui dire d'avoir ce style -image de background-
    panelDiv.className = "panel";//lui dire d'avoir cette classe
    panelDiv.innerHTML = "<h3>titre</h3>";//lui dire de contenir un titre h3
    document.querySelector('.container').appendChild(panelDiv);//lui dire de s'insérer dans l'élément avec la classe container
    return panelDiv;
}



//<div style="background-image: url(./img/normandy.png)" class="panel">
//    <h3>Normandy SR1</h3>
//</div>
