function iniciarJogo() {
    document.getElementById('game-container').style.display = 'block';
    document.getElementById('btn-jogar').style.display = 'none';
}

// Lógica de Drag and Drop
const draggables = document.querySelectorAll('.draggable');
draggables.forEach(item => {
    item.addEventListener('dragstart', drag);
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var targetBin = ev.currentTarget;

    // Verifica se o tipo do item corresponde ao recipiente
    // O ID do recipiente contém o tipo (ex: bin-verdura contém 'verdura')
    if (targetBin.id.includes(draggedElement.getAttribute('data-type'))) {
        targetBin.appendChild(draggedElement);
        draggedElement.style.background = "#a5d6a7";
        draggedElement.setAttribute('draggable', 'false');
        draggedElement.innerText += " (OK!)";
        verificarVitoria();
    } else {
        alert("Ops! Esse item não pertence a essa categoria.");
    }
}

function verificarVitoria() {
    const remaining = document.getElementById('items-area').children.length;
    if (remaining === 0) {
        alert("Parabéns! Você ajudou a organizar a fazenda de forma sustentável!");
    }
}