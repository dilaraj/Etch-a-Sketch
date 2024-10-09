let container = document.getElementById("container");

createGrid = () => {

    for(let i = 0; i < 256; i++) {
        var newColumn = document.createElement('div');
        newColumn.className = "column";
        container.appendChild(newColumn);
    }
    
}

createGrid()