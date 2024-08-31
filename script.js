function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

let grid;
let w = 10;
let cols, rows;

function setup() {
    createCanvas(400, 400);
    cols = width / w;
    rows = height / w;
    grid = make2DArray(cols, rows);

    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            grid[i][j] = 0;
        }
    }
}

function draw() {
    background();

    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            stroke(255);
            fill(grid[i][j]*255);
        }
    }
}
