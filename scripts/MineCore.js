var MineCore = function (parameters) {
    this.explode = parameters.explode;
    this.win = parameters.win;
    this.group = parameters.group;
    this.picked = parameters.picked;
    this.basic = parameters.basic;
    this.numbers = parameters.numbers;
    this.random = parameters.random;
    this.mine = parameters.mine;
    this.marker = parameters.marker;
    this.r = parameters.interval;
    this.a = parameters.a;
    this.b = parameters.b;
    this.c = parameters.c;
    this.previousCellPosition = undefined;
    this.pickable = true;

    this.minesNumber = 0;
    this.question = undefined;
    this.cell = new Array(this.a);
    for (var i = 0; i < this.a; i++) {
        this.cell[i] = new Array(this.b);
    }
    for (i = 0; i < this.a; i++)
        for (j = 0; j < this.b; j++) {
            this.cell[i][j] = new Array(this.c);
        }
    for (i = 0; i < this.a; i++)
        for (var j = 0; j < this.b; j++)
            for (var k = 0; k < this.c; k++) {
                this.cell[i][j][k] = {
                    danger: 0,
                    position: {x: i * this.r, y: j * this.r, z: k * this.r},
                    vector: {x: i, y: j, z: k},
                    object: this.basic.clone(),
                    mine: false,
                    marker: false,
                    empty: false
                };
                this.cell[i][j][k].object.position.copy(this.cell[i][j][k].position);
                this.group.add(this.cell[i][j][k].object);
                this.center = {
                    x: this.a * this.r / 2,
                    y: this.b * this.r / 2,
                    z: this.c * this.r / 2
                };
                this.cellsNumber = this.a * this.b * this.c;
            }
    this.previousCellPosition = this.cell[0][0][0].position;
    this.addMine = function (obj) {
        var x1 = obj.x, y1 = obj.y, z1 = obj.z;
        if (this.cell[x1][y1][z1].mine == false) {
            this.cell[x1][y1][z1].mine = true;
            for (var x = x1 - 1; x <= x1 + 1; x++)
                for (var y = y1 - 1; y <= y1 + 1; y++)
                    for (var z = z1 - 1; z <= z1 + 1; z++) {
                        if (this.cell[x] && this.cell[x][y] && this.cell[x][y][z]) this.cell[x][y][z].danger++;
                    }
            this.cell[x1][y1][z1].danger--;
            this.minesNumber++;
        }
    };
    this.removeMine = function (obj) {
        var x1 = obj.x, y1 = obj.y, z1 = obj.z;
        if (this.cell[x1][y1][z1].mine == true) {
            this.cell[x1][y1][z1].mine = true;
            for (var x = x1 - 1; x <= x1 + 1; x++)
                for (var y = y1 - 1; y <= y1 + 1; y++)
                    for (var z = z1 - 1; z <= z1 + 1; z++) {
                        if (this.cell[x] && this.cell[x][y] && this.cell[x][y][z]) this.cell[x][y][z].danger--;
                    }
        }
    };
    this.recursiveChecker = function (cell) {
        for (var x = cell.x - 1; x <= cell.x + 1; x++)
            for (var y = cell.y - 1; y <= cell.y + 1; y++)
                for (var z = cell.z - 1; z <= cell.z + 1; z++)
                    if (this.cell[x] && this.cell[x][y] && this.cell[x][y][z]) {
                        if (this.cell[x][y][z].empty == false) {
                            if (this.cell[x][y][z].danger == 0) {
                                this.checkCell(this.cell[x][y][z].vector);
                                this.recursiveChecker({x: x, y: y, z: z});
                            } else {
                                this.checkCell(this.cell[x][y][z].vector);
                            }
                        }
                    }
    };
    this.setCell = function (cell, obj) {
        if (obj) {
            this.group.remove(this.cell[cell.x][cell.y][cell.z].object);
            this.cell[cell.x][cell.y][cell.z].object = obj.clone();
            this.cell[cell.x][cell.y][cell.z].object.position.copy(this.cell[cell.x][cell.y][cell.z].position);
            this.group.add(this.cell[cell.x][cell.y][cell.z].object);
        } else {
            if (this.cell[cell.x][cell.y][cell.z].object) {
                this.group.remove(this.cell[cell.x][cell.y][cell.z].object);
                this.cell[cell.x][cell.y][cell.z].object = undefined;
                this.cell[cell.x][cell.y][cell.z].empty = true;
            }
        }
    };
    this.pickCellOnPosition = function (position) {
        if (!this.pickable) return;
        let cell = {
            x: position.x / this.r,
            y: position.y / this.r,
            z: position.z / this.r
        };
        if (!(this.previousCellPosition.x == cell.x && this.previousCellPosition.y == cell.y && this.previousCellPosition.z == cell.z)) {
            if (this.cell[this.previousCellPosition.x][this.previousCellPosition.y][this.previousCellPosition.z].empty == false) {
                this.group.remove(this.cell[this.previousCellPosition.x][this.previousCellPosition.y][this.previousCellPosition.z].object);
                this.cell[this.previousCellPosition.x][this.previousCellPosition.y][this.previousCellPosition.z].object = (this.cell[this.previousCellPosition.x][this.previousCellPosition.y][this.previousCellPosition.z].marker == true ? this.marker : this.basic).clone();
                this.cell[this.previousCellPosition.x][this.previousCellPosition.y][this.previousCellPosition.z].object.position.copy(this.cell[this.previousCellPosition.x][this.previousCellPosition.y][this.previousCellPosition.z].position);
                this.group.add(this.cell[this.previousCellPosition.x][this.previousCellPosition.y][this.previousCellPosition.z].object);
            }
            if (this.cell[cell.x][cell.y][cell.z].empty == false) {
                this.setCell(cell, this.picked);
                this.question = this.cell[cell.x][cell.y][cell.z].object;
            }
            this.previousCellPosition = {
                x: cell.x,
                y: cell.y,
                z: cell.z
            };
        }
    };
    this.setMarkerOnPosition = function (position) {
        if (!this.pickable) return;
        let cell = {
            x: position.x / this.r,
            y: position.y / this.r,
            z: position.z / this.r
        };
        this.setMarker(cell);
    };
    this.setMarker = function (cell) {
        if (this.cell[cell.x][cell.y][cell.z].empty == true) return;
        this.setCell(cell, this.cell[cell.x][cell.y][cell.z].marker == true ? this.basic : this.marker);
        this.cell[cell.x][cell.y][cell.z].marker = !this.cell[cell.x][cell.y][cell.z].marker;
    };
    this.checkCellOnPosition = function (position) {
        if (!this.pickable) return;
        let cell = {
            x: position.x / this.r,
            y: position.y / this.r,
            z: position.z / this.r
        };
        if (this.cell[cell.x][cell.y][cell.z]) {
            this.checkCell(cell);
        }
    };
    this.checkCell = function (cell) {
        if (this.cell[cell.x][cell.y][cell.z].marker == true) return;
        let around = 0;
        let array = [{x: cell.x - 1, y: cell.y, z: cell.z}, {x: cell.x + 1, y: cell.y, z: cell.z},
            {x: cell.x, y: cell.y - 1, z: cell.z}, {x: cell.x, y: cell.y + 1, z: cell.z},
            {x: cell.x, y: cell.y, z: cell.z - 1}, {x: cell.x, y: cell.y, z: cell.z + 1}];
        for (let i = 0; i < array.length; i++) {
            let x = array[i].x;
            let y = array[i].y;
            let z = array[i].z;
            if (this.cell[x] && this.cell[x][y] && this.cell[x][y][z] && (this.cell[x][y][z].empty == false)) {
                around++;
            }
        }
        if (around == 6) return;
        if (this.cell[cell.x][cell.y][cell.z].mine == true) {
            this.explode();
            this.pickable = false;
            for (let i = 0; i < this.a; i++)
                for (let j = 0; j < this.b; j++)
                    for (let k = 0; k < this.c; k++) {
                        if (this.cell[i][j][k].mine == true) {
                            this.setCell(this.cell[i][j][k].vector, this.mine);
                        }
                    }
            return true;
        }
        this.cellsNumber--;
        if (this.cellsNumber == this.minesNumber) {
            this.win();
            this.pickable = false;
            for (let i = 0; i < this.a; i++)
                for (let j = 0; j < this.b; j++)
                    for (let k = 0; k < this.c; k++) {
                        if (this.cell[i][j][k].mine == true) {
                            this.setCell(this.cell[i][j][k].vector, this.mine);
                        }
                    }
        }
        this.setCell(this.cell[cell.x][cell.y][cell.z].vector);
        if (this.cell[cell.x][cell.y][cell.z].danger > 0) {
            this.setCell(this.cell[cell.x][cell.y][cell.z].vector, this.numbers[this.cell[cell.x][cell.y][cell.z].danger]);
        } else {
            this.recursiveChecker(this.cell[cell.x][cell.y][cell.z].vector);
        }
    };
    if (this.random) {
        var getRandomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        while (this.minesNumber < this.random) {
            this.addMine({
                x: getRandomInt(0, this.a - 1),
                y: getRandomInt(0, this.b - 1),
                z: getRandomInt(0, this.c - 1)
            });
        }
    }
};

if (module) module.exports = MineCore;
