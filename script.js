document.addEventListener('DOMContentLoaded', function () {

    // Setting up the grid
    const container = document.getElementById('container');

    const containerSize = 600; // Size of the container in pixels

    let gridSize = 16; // default grid size
    let divsGrid = [];

    function generateGrid() {
        // Clear existing grid
        divsGrid.forEach(div => {
            div.remove();
        });

        // Regenerate the grid with the new size
        divsGrid = [];

        const squareSize = containerSize / gridSize; // Calculate square size

        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                const div = document.createElement('div');
                div.classList.add('square');

                div.style.width = `${squareSize}px`; // Set width of the square
                div.style.height = `${squareSize}px`; // Set height of the square

                divsGrid.push(div);
                container.appendChild(div);
            }
        }

        // Calculate the column width for the grid template
        const columnWidth = 100 / gridSize;

        // Set the grid template columns dynamically
        container.style.gridTemplateColumns = `repeat(${gridSize}, ${columnWidth}%)`;

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
