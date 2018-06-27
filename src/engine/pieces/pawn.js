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
        console.log(moves);
        return moves;
    };
    Pawn.prototype.moveTo = function (board, newSquare) {
        _super.prototype.moveTo.call(this, board, newSquare);
        this.hasMoved = true;
    };
    return Pawn;
}(Piece));
export default Pawn;
//# sourceMappingURL=pawn.js.map