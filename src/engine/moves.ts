import Square from "./square";
import {default as Player} from "./player";
import Move from "./move";
import Board from "./board";
import Piece from "./pieces/piece";

export default class Moves {
    public static getMoves(board: Board, piece: Piece, currentSquare: Square, movePatterns: Move[]) {
        let moves: Square[] = [];
        for(let movePattern of movePatterns){
            let move: Square;
            if(piece.player == Player.WHITE){
                move = Square.relative(movePattern.row, movePattern.col,currentSquare);
            }
            if(piece.player == Player.BLACK){
                move = Square.relative(-movePattern.row,-movePattern.col,currentSquare);
            }
            if(move != undefined){
                moves.push(move);
            }
        }
        return moves;
    }
}