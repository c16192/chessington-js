import Piece from './piece';
import Board from "../board";
import {PlayerType} from "../player";
import Square from "../square";
import Move from "../move";
import GameSettings from "../gameSettings";
import Moves from "../moves";

export default class Queen extends Piece {
    constructor(player: PlayerType) {
        super(player);
    }

    public getAvailableMoves(board: Board): Square[] {
        const currentSquare = board.findPiece(this);
        let movePatterns: Move[] = [];
        for(let i = 1; i < GameSettings.BOARD_SIZE; i++){
            movePatterns.push(new Move(i,0));
            movePatterns.push(new Move(-i,0));
            movePatterns.push(new Move(0,i));
            movePatterns.push(new Move(0,-i));
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
