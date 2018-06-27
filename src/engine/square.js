import GameSettings from "./gameSettings";
var Square = /** @class */ (function () {
    function Square(row, col) {
        this.row = row;
        this.col = col;
    }
    Square.at = function (row, col) {
        if (row >= 0 && row < GameSettings.BOARD_SIZE && col >= 0 && col < GameSettings.BOARD_SIZE) {
            return new Square(row, col);
        }
        else {
            return undefined;
        }
    };
    Square.relative = function (row, col, currentSquare) {
        return Square.at(currentSquare.row + row, currentSquare.col + col);
    };
    Square.prototype.equals = function (otherSquare) {
        return !!otherSquare && this.row === otherSquare.row && this.col === otherSquare.col;
    };
    Square.prototype.toString = function () {
        return "Row " + this.row + ", Col " + this.col;
    };
    return Square;
}());
export default Square;
//# sourceMappingURL=square.js.map