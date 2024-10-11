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

    let squareSize = containerWidth / gridSize; // Calculate the square size

    for(let i = 0; i < finalSize; i++) {
        var newSquare = document.createElement('div');
        newSquare.classList.add("square");
        newSquare.style.width = `${squareSize}px`;
        newSquare.style.height = `${squareSize}px`;
        container.appendChild(newSquare);
    }

    colorGrid();
}


colorGrid = () => {
    //alert("colorGrid function is working!")
    let mouseDown = false;
    const squareDiv = document.querySelectorAll(".square")

    squareDiv.forEach((e) => {
        e.setAttribute("draggable", false);
        
        e.addEventListener("mousedown", () => {
            mouseDown = true
            e.style.backgroundColor = "black";
        })

        e.addEventListener("mouseover", () => {
            if (mouseDown) {
                e.style.backgroundColor = "black";
            }
        })

        e.addEventListener("mouseup", () => {
            mouseDown = false;
        })
    })
}