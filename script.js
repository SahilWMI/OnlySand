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
    createCanvas(windowWidth, windowHeight);
    cols = floor(width / w);
    rows = floor(height / w);
    grid = make2DArray(cols, rows);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    cols = floor(width / w);
    rows = floor(height / w);
    grid = make2DArray(cols, rows);
}

function mouseDragged() {
    let mouseCol = floor(mouseX / w);
    let mouseRow = floor(mouseY / w);

    let matrix = 3;
    let extent = floor(matrix / 2);
    for (let i = -extent; i <= extent; i++) {
        for (let j = -extent; j <= extent; j++) {
            if (random(1) < 0.75) {
                let col = mouseCol + i;
                let row = mouseRow + j;
                if (col >= 0 && col < cols && row >= 0 && row < rows) {
                    grid[col][row] = 1;
                }
            }
        }
    }
}

function draw() {
    background(0);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            noStroke();
            if (grid[i][j] > 0) {
                fill(255, 205, 51);
                let x = i * w;
                let y = j * w;
                square(x, y, w);
            }
        }
    }

    let nextGrid = make2DArray(cols, rows);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let state = grid[i][j];
            if (state > 0) {
                let below = (j + 1 < rows) ? grid[i][j + 1] : 1;
                let dir = 1;
                if (random(1) < 0.5) {
                    dir *= -1;
                }

                let belowA = (i + dir >= 0 && i + dir < cols && j + 1 < rows) ? grid[i + dir][j + 1] : 1;
                let belowB = (i - dir >= 0 && i - dir < cols && j + 1 < rows) ? grid[i - dir][j + 1] : 1;

                if (below === 0) {
                    nextGrid[i][j + 1] = grid[i][j];
                } else if (belowA === 0) {
                    nextGrid[i + dir][j + 1] = grid[i][j];
                } else if (belowB === 0) {
                    nextGrid[i - dir][j + 1] = grid[i][j];
                } else {
                    nextGrid[i][j] = grid[i][j];
                }
            }
        }
    }

    grid = nextGrid;
}
