import Square from "./square";
import { default as Player } from "./player";
var Moves = /** @class */ (function () {
    function Moves() {
    }
    Moves.getMoves = function (board, piece, currentSquare, movePatterns) {
        var moves = [];
        for (var _i = 0, movePatterns_1 = movePatterns; _i < movePatterns_1.length; _i++) {
            var movePattern = movePatterns_1[_i];
            var move = void 0;
            if (piece.player == Player.WHITE) {
                move = Square.relative(movePattern.row, movePattern.col, currentSquare);
            }
            if (piece.player == Player.BLACK) {
                move = Square.relative(-movePattern.row, -movePattern.col, currentSquare);
            }
            if (move != undefined) {
                moves.push(move);
            }
        }
        return moves;
    };
    return Moves;
}());
export default Moves;
//# sourceMappingURL=moves.js.map