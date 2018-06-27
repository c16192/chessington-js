import Player from './player';
import GameSettings from './gameSettings';
import Square from './square';
<<<<<<< HEAD
var Board = /** @class */ (function () {
    function Board() {
        this.currentPlayer = Player.WHITE;
=======

export default class Board {
    constructor(currentPlayer) {
        this.currentPlayer = currentPlayer ? currentPlayer : Player.WHITE;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 716fede... Add a test for pawns moving two spaces initially
=======
>>>>>>> 716fede... Add a test for pawns moving two spaces initially
=======
>>>>>>> 716fede... Add a test for pawns moving two spaces initially
        this.board = this.createBoard();
    }
    Board.prototype.createBoard = function () {
        var board = new Array(GameSettings.BOARD_SIZE);
        for (var i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        return board;
    };
    Board.prototype.setPiece = function (square, piece) {
        this.board[square.row][square.col] = piece;
    };
    Board.prototype.getPiece = function (square) {
        return this.board[square.row][square.col];
    };
    Board.prototype.findPiece = function (pieceToFind) {
        for (var row = 0; row < this.board.length; row++) {
            for (var col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === pieceToFind) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error('The supplied piece is not on the board');
    };
    Board.prototype.movePiece = function (fromSquare, toSquare) {
        var movingPiece = this.getPiece(fromSquare);
        if (!!movingPiece && movingPiece.player === this.currentPlayer) {
            this.setPiece(toSquare, movingPiece);
            this.setPiece(fromSquare, undefined);
            this.currentPlayer = (this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE);
        }
    };
    return Board;
}());
export default Board;
//# sourceMappingURL=board.js.map