import {default as Player, PlayerType} from "../player";
import Board from "../board";
import Square from "../square";
import Move from "../move";

export default class Piece {
    constructor(public player: PlayerType){}

    public getAvailableMoves(board: Board): Square[] {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public moveTo(board: Board, newSquare: Square): void {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
