let container = document.getElementById("container");

createNewGrid = () => {
    container.innerHTML = '';

    let gridSize = prompt("Create your new grid! How many many squares do you want on each side?")
    if(gridSize > 100) {
        alert("Number of squares cannot be greater than 100. Please try again!")
        gridWidth = prompt("Create your new grid! How many squares wide?")
    }

    let finalSize = gridSize * gridSize;

    let containerWidth = container.clientWidth;
    let containerHeight = container.clientHeight;

    let squareSize = containerWidth / gridSize;

    for(let i = 0; i < finalSize; i++) {
        var newSquare = document.createElement('div');
        newSquare.className = "square";
        container.appendChild(newSquare);
    }

    let squares = document.getElementsByClassName("square")

    for (let square of squares) {
        square.onmouseover = () => {
            square.style.backgroundColor = "blue"
        }
    }
}

