document.addEventListener('DOMContentLoaded', function () {

    // Setting up the grid
    const container = document.getElementById('container');

    let gridSize = 16; // default grid size
    let divsGrid = [];

    function generateGrid() {
        // Clear existing grid
        divsGrid.forEach(div => {
            div.remove();
        });

        // Regenerate the grid with the new size
        divsGrid = [];

        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                const div = document.createElement('div');
                div.classList.add('square');
                divsGrid.push(div);
                container.appendChild(div);
            }
        }

        setUpEventListeners();
    }

    // Hover and press mouse to change square colours
    function setUpEventListeners() {
        let isMousePressed = false;

        divsGrid.forEach(div => {
            div.addEventListener('mouseenter', function () {
                div.addEventListener('mousedown', function () {
                    isMousePressed = true;
                });

                div.addEventListener('mouseup', function () {
                    isMousePressed = false;
                });

                if (isMousePressed) {
                    div.style.backgroundColor = "#000000";
                }
            });
        });
    }

    generateGrid();

    // Change grid size
    const changeSizeButton = document.querySelector('.changeGridSize');
    changeSizeButton.addEventListener('click', function () {
        setGridSize();
    });

    function setGridSize() {
        let size = prompt("Enter grid size here:");

        const sizeInt = parseInt(size);

        if (!isNaN(sizeInt) && Number.isInteger(sizeInt) && sizeInt >= 16 && sizeInt <= 100) {
            gridSize = sizeInt;
            generateGrid();
        }
        else {
            gridSize = 16;
            generateGrid();
        }
    }


});
