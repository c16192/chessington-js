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
var Bishop = /** @class */ (function (_super) {
    __extends(Bishop, _super);
    function Bishop(player) {
        var _this = _super.call(this, player) || this;
        _this.route = {
            cross: false,
            diagonal: true
        };
        return _this;
    }
    Bishop.prototype.getAvailableMoves = function (board) {
        var currentSquare = board.findPiece(this);
        var movePatterns = [];
        for (var i = 1; i < GameSettings.BOARD_SIZE; i++) {
            movePatterns.push(new Move(i, i));
            movePatterns.push(new Move(i, -i));
            movePatterns.push(new Move(-i, i));
            movePatterns.push(new Move(-i, -i));
        }
        var moves = Moves.getMoves(board, this, currentSquare, movePatterns);
        console.log(moves);
        return moves;
    };
    return Bishop;
}(Piece));
export default Bishop;
//# sourceMappingURL=bishop.js.map