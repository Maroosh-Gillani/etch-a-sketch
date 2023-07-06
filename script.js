document.addEventListener('DOMContentLoaded', function() {

    // Setting up the grid
    const container = document.getElementById('container');
    console.log(container);

    const gridSize = 16;
    const divsGrid = [];

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement('div');
            div.classList.add('square');
            div.classList.add();
            divsGrid.push(div);
        }
    }

    divsGrid.forEach(div => {
        container.appendChild(div);
    });

    // Hover to change square colours
    divsGrid.forEach(div => {
        div.addEventListener('mouseenter', function() {
            this.classList.add('hovered');

            if (div.classList.contains('hovered')) {
                div.style.backgroundColor = "#000000";
            }
        })
    });

});
