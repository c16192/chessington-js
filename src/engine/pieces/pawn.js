var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Piece from './piece';
import Move from "../move";
import Moves from "../moves";
var Pawn = /** @class */ (function (_super) {
    __extends(Pawn, _super);
    function Pawn(player) {
        var _this = _super.call(this, player) || this;
        _this.player = player;
        _this.route = {
            cross: true,
            diagonal: false
        };
        _this.hasMoved = false;
        return _this;
    }
    Pawn.prototype.getAvailableMoves = function (board) {
        var currentSquare = board.findPiece(this);
        var movePatterns = [new Move(1, 0)];
        if (!this.hasMoved) {
            movePatterns.push(new Move(2, 0));
        }
        var moves = Moves.getMoves(board, this, currentSquare, movePatterns);
        var finalMoves = this.forbidInterferingMoves(board, moves);
        finalMoves = finalMoves.concat(this.diagonalMoves(board, currentSquare));
        console.log(finalMoves);
        return finalMoves;
    };
    Pawn.prototype.moveTo = function (board, newSquare) {
        _super.prototype.moveTo.call(this, board, newSquare);
        this.hasMoved = true;
    };
    Pawn.prototype.forbidInterferingMoves = function (board, moves) {
        var trimmedMoves = [];
        for (var _i = 0, moves_1 = moves; _i < moves_1.length; _i++) {
            var move = moves_1[_i];
            if (board.getPiece(move) == undefined) {
                trimmedMoves.push(move);
            }
        }
        return trimmedMoves;
    };
    Pawn.prototype.diagonalMoves = function (board, currentSquare) {
        var finalMoves = [];
        var movePatterns = [new Move(1, 1), new Move(1, -1)];
        var moves = Moves.getMoves(board, this, currentSquare, movePatterns);
        for (var _i = 0, moves_2 = moves; _i < moves_2.length; _i++) {
            var move = moves_2[_i];
            var pieceOnNextSquare = board.getPiece(move);
            if (pieceOnNextSquare != undefined && pieceOnNextSquare.player != this.player) {
                finalMoves.push(move);
            }
        }
        return finalMoves;
    };
    return Pawn;
}(Piece));
export default Pawn;
//# sourceMappingURL=pawn.js.map