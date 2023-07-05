document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    console.log(container);

    const gridSize = 16;
    const divsGrid = [];

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement('div');
            div.classList.add('square');
            divsGrid.push(div);
        }
    }

    divsGrid.forEach(div => {
        container.appendChild(div);
    });
});
