//Insertion des images et événement au click

//Import de la class panel
import { Panel } from "./script/panel.js";

//Recherche des données images
//const panelImages = [
//  new Panel("normandy"),
//  new Panel("grass"),
//  new Panel("illos"),
//  new Panel("redmoon"),
//  new Panel("selenee")
//];

//Recherche des données titres -en attente
const panelTitles = [
  new Panel("Normandy SR1"),
  new Panel("Planète inconnue"),
  new Panel("Illos"),
  new Panel("Lune rouge"),
  new Panel("Sélénée"),
];

for (let panelTitle of panelTitles) {
  panelTitle.render();
}

//Logique d'application et écouteur d'événement click
//for (let image of images) {
//  const panel = createPanel(image);
//  panel.addEventListener("click", function () {
//    ///panels.forEach(p => p.classList.remove('active')); en attente
//    panel.classList.add("active");
//  });
//}
