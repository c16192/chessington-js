var Square = /** @class */ (function () {
    function Square(row, col) {
        this.row = row;
        this.col = col;
    }
    Square.at = function (row, col) {
        return new Square(row, col);
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