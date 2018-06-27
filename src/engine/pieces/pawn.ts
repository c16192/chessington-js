import Piece from './piece';
import Board from "../board";
import {default as Player, PlayerType} from "../player";
import Square from "../square";
import Move from "../move";

export default class Pawn extends Piece {
    constructor(public player: PlayerType) {
        super(player);
    }

    private hasMoved: boolean = false;

    public getAvailableMoves(board: Board): Square[] {
        const currentSquare = board.findPiece(this);
        let moves: Square[] = [this.getMove(board, currentSquare, new Move(1,0))];
        if(!this.hasMoved) {
            moves.push(this.getMove(board, currentSquare, new Move(2,0)));
        }
        return moves;
    }

    public moveTo(board: Board, newSquare: Square): void {
        super.moveTo(board, newSquare);
        this.hasMoved = true;
    }
}
