function make2DArray(cols, rows) {
    let arr = new Array(Math.floor(cols));
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(Math.floor(rows));
        for (let j = 0; j < arr[i].length; j++){
            arr[i][j] = 0;
        }
    }
    return arr;
}

let grid;
let w = 10;
let cols, rows;

function setup() {
    createCanvas(400, 400);
    cols = Math.floor(width / w);
    rows = Math.floor(height / w);
    grid = make2DArray(cols, rows);

    grid[20][10] = 1;
}

function draw() {
    background(0);

    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            stroke(255);
            fill(grid[i][j] * 255);
            let x = i * w;
            let y = j * w;
            square(x, y, w);
        }
    }

    let nextGrid = make2DArray(cols, rows);
    
    for(let i = 0; i < cols; i++) {
        for(let j = 0; j < rows; j++) {
            let state = grid[i][j];

            if (state === 1) {
                if (j + 1 < rows && grid[i][j + 1] === 0) {
                    nextGrid[i][j + 1] = 1;
                } 
                else if (i - 1 >= 0 && j + 1 < rows && grid[i - 1][j + 1] === 0) {
                    nextGrid[i - 1][j + 1] = 1;
                } 
                else if (i + 1 < cols && j + 1 < rows && grid[i + 1][j + 1] === 0) {
                    nextGrid[i + 1][j + 1] = 1;
                } 
                else {
                    nextGrid[i][j] = 1;
                }
            }
        }  
    }

    grid = nextGrid;
}
