import Piece from './piece';
import Board from "../board";
import {PlayerType} from "../player";
import Square from "../square";
import Move from "../move";
import GameSettings from "../gameSettings";
import Moves from "../moves";
import Route from "./route";

export default class King extends Piece {
    public route: Route = {
        cross: false,
        diagonal: false
    }
    constructor(player: PlayerType) {
        super(player);
    }

    public getAvailableMoves(board: Board): Square[] {
        const currentSquare = board.findPiece(this);
        let movePatterns: Move[] = [];
        movePatterns.push(new Move(1,0));
        movePatterns.push(new Move(0,1));
        movePatterns.push(new Move(-1,0));
        movePatterns.push(new Move(0,-1));
        movePatterns.push(new Move(1,1));
        movePatterns.push(new Move(-1,1));
        movePatterns.push(new Move(1,-1));
        movePatterns.push(new Move(-1,-1));
        const moves = Moves.getMoves(board, this, currentSquare, movePatterns);
        console.log(moves)
        return moves;
    }
}
