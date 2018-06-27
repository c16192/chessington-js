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
                if (!this.existPieceOnMoveRoute(board, currentSquare, move)) {
                    moves.push(move);
                }
            }
        }
        return moves;
    };
    Moves.existPieceOnMoveRoute = function (board, currentSquare, nextSquare) {
        if (currentSquare.row == nextSquare.row) {
            if (currentSquare.col < nextSquare.col) {
                for (var col = currentSquare.col + 1; col <= nextSquare.col; col++) {
                    if (board.getPiece(Square.at(currentSquare.row, col)) != undefined) {
                        return true;
                    }
                }
            }
            else if (currentSquare.col > nextSquare.col) {
                for (var col = currentSquare.col - 1; col >= nextSquare.col; col--) {
                    if (board.getPiece(Square.at(currentSquare.row, col)) != undefined) {
                        return true;
                    }
                }
            }
            else {
                console.log(currentSquare);
                console.log(nextSquare);
                throw "Cannot move to the same square";
            }
        }
        if (currentSquare.col == nextSquare.col) {
            if (currentSquare.row < nextSquare.row) {
                for (var row = currentSquare.row + 1; row <= nextSquare.row; row++) {
                    if (board.getPiece(Square.at(row, currentSquare.col)) != undefined) {
                        return true;
                    }
                }
            }
            else if (currentSquare.row > nextSquare.row) {
                for (var row = currentSquare.row - 1; row >= nextSquare.row; row--) {
                    if (board.getPiece(Square.at(row, currentSquare.col)) != undefined) {
                        return true;
                    }
                }
            }
            else {
                console.log(currentSquare);
                console.log(nextSquare);
                throw "Cannot move to the same square";
            }
        }
    };
    return Moves;
}());
export default Moves;
//# sourceMappingURL=moves.js.map