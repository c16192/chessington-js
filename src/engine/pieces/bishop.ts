import Piece from './piece';
import {PlayerType} from "../player";
import Board from "../board";
import Square from "../square";
import Move from "../move";
import GameSettings from "../gameSettings";
import Moves from "../moves";
import Route from "./route";

export default class Bishop extends Piece {
    public route: Route = {
        cross: false,
        diagonal: true
    }
    constructor(player: PlayerType) {
        super(player);
    }

    public getAvailableMoves(board: Board): Square[] {
        const currentSquare = board.findPiece(this);
        let movePatterns: Move[] = [];
        for(let i = 1; i < GameSettings.BOARD_SIZE; i++){
            movePatterns.push(new Move(i,i));
            movePatterns.push(new Move(i,-i));
            movePatterns.push(new Move(-i,i));
            movePatterns.push(new Move(-i,-i));
        }
        const moves = Moves.getMoves(board, this, currentSquare, movePatterns);
        console.log(moves)
        return moves;
    }
}
