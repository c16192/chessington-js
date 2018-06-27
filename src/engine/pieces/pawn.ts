import Piece from './piece';
import Board from "../board";
import {default as Player, PlayerType} from "../player";
import Square from "../square";
import Move from "../move";
import GameSettings from "../gameSettings";
import Moves from "../moves";
import Route from "./route";

export default class Pawn extends Piece {
    public route: Route = {
        cross: true,
        diagonal: false
    }
    constructor(public player: PlayerType) {
        super(player);
    }

    private hasMoved: boolean = false;

    public getAvailableMoves(board: Board): Square[] {
        const currentSquare = board.findPiece(this);
        let movePatterns: Move[] = [new Move(1,0)];
        if(!this.hasMoved) {
            movePatterns.push(new Move(2,0));
        }
        const moves = Moves.getMoves(board, this, currentSquare, movePatterns);
        console.log(moves)
        return moves;
    }

    public moveTo(board: Board, newSquare: Square): void {
        super.moveTo(board, newSquare);
        this.hasMoved = true;
    }
}
