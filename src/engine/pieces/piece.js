import { default as Player } from "../player";
import Square from "../square";
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
    Piece.prototype.getMove = function (board, currentSquare, movePattern) {
        var moveTo;
        if (this.player == Player.WHITE) {
            moveTo = Square.relative(movePattern.row, movePattern.col, currentSquare);
        }
        if (this.player == Player.BLACK) {
            moveTo = Square.relative(-movePattern.row, -movePattern.col, currentSquare);
        }
        return moveTo;
    };
    return Piece;
}());
export default Piece;
//# sourceMappingURL=piece.js.map