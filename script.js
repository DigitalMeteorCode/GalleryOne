//Animation au click

const panels = document.querySelectorAll('.container > *'); 

for (let panel of panels) {
    panel.addEventListener('click', function() {
        panels.forEach(p => p.classList.remove('active'));
        panel.classList.add('active');
    });
}

//Insertion des images - En attente du cours du 12 octobre

const panelDiv = document.createElement('div');
panelDiv.style = "background-image: url(./img/normandy.png)";
panelDiv.className = "panel active";



//            <div style="background-image: url(./img/normandy.png)" class="panel">
//                <h3>Normandy SR1</h3>
//            </div>
