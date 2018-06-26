var Piece = /** @class */ (function () {
    function Piece(player) {
        this.player = player;
    }
    Piece.prototype.getAvailableMoves = function (board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    };
    Piece.prototype.moveTo = function (board, newSquare) {
        var currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    };
    return Piece;
}());
export default Piece;
//# sourceMappingURL=piece.js.map