import {PlayerType} from "../player";
import Board from "../board";
import Square from "../square";
import Route from "./route";

export default class Piece {
    public route: Route = {
        cross: false,
        diagonal: false
    }

    constructor(public player: PlayerType){}

    public getAvailableMoves(board: Board): Square[] {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public moveTo(board: Board, newSquare: Square): void {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
