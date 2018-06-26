import {PlayerType} from "../player";
import Board from "../board";

export default class Piece {
    constructor(public player: PlayerType){}

    public getAvailableMoves(board: Board): void {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public moveTo(board: Board, newSquare): void {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
