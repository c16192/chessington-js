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
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight(player) {
        return _super.call(this, player) || this;
    }
    Knight.prototype.getAvailableMoves = function (board) {
        var currentSquare = board.findPiece(this);
        var movePatterns = [];
        movePatterns.push(new Move(1, 2));
        movePatterns.push(new Move(2, 1));
        movePatterns.push(new Move(-1, 2));
        movePatterns.push(new Move(-2, 1));
        movePatterns.push(new Move(1, -2));
        movePatterns.push(new Move(2, -1));
        movePatterns.push(new Move(-1, -2));
        movePatterns.push(new Move(-2, -1));
        var moves = Moves.getMoves(board, this, currentSquare, movePatterns);
        console.log(moves);
        return moves;
    };
    return Knight;
}(Piece));
export default Knight;
//# sourceMappingURL=knight.js.map