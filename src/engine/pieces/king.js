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
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King(player) {
        return _super.call(this, player) || this;
    }
    King.prototype.getAvailableMoves = function (board) {
        var currentSquare = board.findPiece(this);
        var movePatterns = [];
        movePatterns.push(new Move(1, 0));
        movePatterns.push(new Move(0, 1));
        movePatterns.push(new Move(-1, 0));
        movePatterns.push(new Move(0, -1));
        movePatterns.push(new Move(1, 1));
        movePatterns.push(new Move(-1, 1));
        movePatterns.push(new Move(1, -1));
        movePatterns.push(new Move(-1, -1));
        var moves = Moves.getMoves(board, this, currentSquare, movePatterns);
        console.log(moves);
        return moves;
    };
    return King;
}(Piece));
export default King;
//# sourceMappingURL=king.js.map