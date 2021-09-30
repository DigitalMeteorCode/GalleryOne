//Code cours - en attente live 5 octobre

/*const panels = document.querySelector('.container > *'); 

panels[0].addEventListener('click', function () {

});*/


//Mon essai perso = fonctionne mais sans doute inutilement long

const panels = document.getElementsByClassName('panel');
console.log(panels);

panels[0].addEventListener('click', function () {
    panels[0].classList.add("active");
    panels[1].classList.remove("active");
    panels[2].classList.remove("active");
    panels[3].classList.remove("active");
    panels[4].classList.remove("active");
    console.log("Panel 0 cliqué");
    console.log(panels);
});
panels[1].addEventListener('click', function () {
    panels[1].classList.add("active");
    panels[0].classList.remove("active");
    panels[2].classList.remove("active");
    panels[3].classList.remove("active");
    panels[4].classList.remove("active");
    console.log("Panel 1 cliqué");
    console.log(panels);
});
panels[2].addEventListener('click', function () {
    panels[2].classList.add("active");
    panels[1].classList.remove("active");
    panels[0].classList.remove("active");
    panels[3].classList.remove("active");
    panels[4].classList.remove("active");
    console.log("Panel 2 cliqué");
    console.log(panels);
});
panels[3].addEventListener('click', function () {
    panels[3].classList.add("active");
    panels[1].classList.remove("active");
    panels[2].classList.remove("active");
    panels[0].classList.remove("active");
    panels[4].classList.remove("active");
    console.log("Panel 3 cliqué");
    console.log(panels);
});
panels[4].addEventListener('click', function () {
    panels[4].classList.add("active");
    panels[1].classList.remove("active");
    panels[2].classList.remove("active");
    panels[3].classList.remove("active");
    panels[0].classList.remove("active");
    console.log("Panel 4 cliqué");
    console.log(panels);
});
