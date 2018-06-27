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
import GameSettings from "../gameSettings";
import Moves from "../moves";
var Rook = /** @class */ (function (_super) {
    __extends(Rook, _super);
    function Rook(player) {
        var _this = _super.call(this, player) || this;
        _this.route = {
            cross: true,
            diagonal: false
        };
        return _this;
    }
    Rook.prototype.getAvailableMoves = function (board) {
        var currentSquare = board.findPiece(this);
        var movePatterns = [];
        for (var i = 1; i < GameSettings.BOARD_SIZE; i++) {
            movePatterns.push(new Move(i, 0));
            movePatterns.push(new Move(-i, 0));
            movePatterns.push(new Move(0, i));
            movePatterns.push(new Move(0, -i));
        }
        var moves = Moves.getMoves(board, this, currentSquare, movePatterns);
        console.log(moves);
        return moves;
    };
    return Rook;
}(Piece));
export default Rook;
//# sourceMappingURL=rook.js.map