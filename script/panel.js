//pour pouvoir importer la class panel, il faut d'abord l'exporter, et préciser sur le fichier html que script.js est de type module
export class Panel {
  constructor(title = "No title") {
    const div = document.createElement("div");
    this.html = div;
    this.initialize(div, title);
    //créer un élément div
  }

  initialize(div, title) {
    //div.style = "background-image: url(img/" + img + ".png)";
    div.style = "background-image: url(img/normandy.png)";
    //lui dire d'avoir ce style -image de background-
    div.className = "panel";
    //lui dire d'avoir cette classe
    div.innerHTML = "<h3>" + title + "</h3>";
    //lui dire de contenir un titre h3
  }

  render() {
    document.querySelector(".container").appendChild(this.html);
    //lui dire de s'insérerdans l'élément avec la classe container
  }
}
