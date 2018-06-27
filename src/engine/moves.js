import Square from "./square";
import { default as Player } from "./player";
import King from "./pieces/king";
import Pawn from "./pieces/pawn";
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
                if (!this.existPieceOnMoveRoute(board, piece, currentSquare, move)) {
                    moves.push(move);
                }
            }
        }
        return moves;
    };
    Moves.existPieceOnMoveRoute = function (board, piece, currentSquare, nextSquare) {
        var pieceOnNextSquare = board.getPiece(nextSquare);
        if (pieceOnNextSquare != undefined) {
            if (this.illegalMove(piece, pieceOnNextSquare)) {
                return true;
            }
        }
        if (piece.route.cross) {
            var currRow = currentSquare.row;
            var currCol = currentSquare.col;
            var nextRow = nextSquare.row;
            var nextCol = nextSquare.col;
            if (currRow == nextRow) {
                for (var col = Math.min(currCol, nextCol) + 1; col < Math.max(currCol, nextCol); col++) {
                    if (board.getPiece(Square.at(currRow, col)) != undefined) {
                        return true;
                    }
                }
            }
            if (currCol == nextCol) {
                for (var row = Math.min(currRow, nextRow) + 1; row < Math.max(currRow, nextRow); row++) {
                    if (board.getPiece(Square.at(row, currCol)) != undefined) {
                        return true;
                    }
                }
            }
        }
        if (piece.route.diagonal) {
            var currRow = currentSquare.row;
            var currCol = currentSquare.col;
            var nextRow = nextSquare.row;
            var nextCol = nextSquare.col;
            for (var row = Math.min(currRow, nextRow) + 1; row < Math.max(currRow, nextRow); row++) {
                for (var col = Math.min(currCol, nextCol) + 1; col < Math.max(currCol, nextCol); col++) {
                    if (board.getPiece(Square.at(row, col)) != undefined) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    Moves.illegalMove = function (piece, pieceOnNextSquare) {
        if (pieceOnNextSquare.player == piece.player) {
            return true;
        }
        if (pieceOnNextSquare instanceof King) {
            return true;
        }
        if (piece instanceof Pawn) {
            return true;
        }
        return false;
    };
    return Moves;
}());
export default Moves;
//# sourceMappingURL=moves.js.map