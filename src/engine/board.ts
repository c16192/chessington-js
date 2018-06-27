import Player from './player';
import GameSettings from './gameSettings';
import Square from './square';
import {PlayerType} from "./player";
import Piece from "./pieces/piece";

export default class Board {

    private currentPlayer: PlayerType = Player.WHITE;
    private board: Piece[][] = this.createBoard();

    constructor(player: PlayerType) {
        if (player != undefined) {
            this.currentPlayer = player
        }
    }

    public createBoard(): Piece[][] {
        const board: Piece[][] = new Array(GameSettings.BOARD_SIZE);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        return board;
    }

    public setPiece(square: Square, piece: Piece): void {
        this.board[square.row][square.col] = piece;
    }

    public getPiece(square: Square): Piece {
        return this.board[square.row][square.col];
    }

    public findPiece(pieceToFind: Piece): Square {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === pieceToFind) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error('The supplied piece is not on the board');
    }

    public movePiece(fromSquare: Square, toSquare: Square): void {
        const movingPiece = this.getPiece(fromSquare);
        if (!!movingPiece && movingPiece.player === this.currentPlayer) {
            this.setPiece(toSquare, movingPiece);
            this.setPiece(fromSquare, undefined);
            this.currentPlayer = (this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE);
        }
    }
}
