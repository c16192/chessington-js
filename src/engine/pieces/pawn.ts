import Piece from './piece';
import Board from "../board";
import {default as Player, PlayerType} from "../player";
import Square from "../square";

export default class Pawn extends Piece {
    constructor(player: PlayerType) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);
        let moves: Square[];
        if(this.player == Player.WHITE){
            moves = [Square.at(currentSquare.row + 1, currentSquare.col)]
        }
        if(this.player == Player.BLACK){
            moves = [Square.at(currentSquare.row - 1, currentSquare.col)]
        }
        return moves;
    }
}
