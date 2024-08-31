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

function mouseDragged() {
    let col = floor(mouseX / w);
    let row = floor(mouseY / w);
    if (col >= 0 && col <= cols-1 && row >= 0 && row <= rows-1) {
        grid[col][row] = 1;
    }
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
                let below = grid[i][j + 1]
                let dir = 1;
                if (random(1) < 0.5) {
                    dir *= -1;
                }

                let belowA, belowR;
                
                if(i - dir >= 0 && i + dir <= cols - 1) {
                    belowA = grid[i + dir][j + 1]
                }
                if(i - dir >= 0 && i + dir <= cols - 1) {
                    belowB = grid[i + dir][j + 1]
                }  

                if (below === 0) {
                    nextGrid[i][j + 1] = 1;
                } else if (belowA === 0) {
                    nextGrid[i + dir][j + 1] = 1;
                } else if (belowB === 0) {
                    nextGrid[i - dir][j + 1] = 1;
                } else {
                    nextGrid[i][j] = 1;
                }
            }
        }  
    }

    grid = nextGrid;
}
