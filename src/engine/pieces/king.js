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
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King(player) {
        return _super.call(this, player) || this;
    }
    King.prototype.getAvailableMoves = function (board) {
        return new Array(0);
    };
    return King;
}(Piece));
export default King;
//# sourceMappingURL=king.js.map