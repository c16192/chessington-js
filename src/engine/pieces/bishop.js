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
var Bishop = /** @class */ (function (_super) {
    __extends(Bishop, _super);
    function Bishop(player) {
        return _super.call(this, player) || this;
    }
    Bishop.prototype.getAvailableMoves = function (board) {
        return new Array(0);
    };
    return Bishop;
}(Piece));
export default Bishop;
//# sourceMappingURL=bishop.js.map