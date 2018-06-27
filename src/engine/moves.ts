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
                if(!this.existPieceOnMoveRoute(board, currentSquare, move)){
                    moves.push(move);
                }
            }
        }
        return moves;
    }

    public static existPieceOnMoveRoute(board: Board, currentSquare: Square, nextSquare: Square){
        if(board.getPiece(nextSquare) != undefined){
            return true;
        }
        const currRow = currentSquare.row;
        const currCol = currentSquare.col;
        const nextRow = nextSquare.row;
        const nextCol = nextSquare.col;
        if(currRow == nextRow){
            for(let col = Math.min(currCol, nextCol) + 1; col < Math.max(currCol, nextCol); col++){
                if(board.getPiece(Square.at(currRow, col)) != undefined){
                    return true;
                }
            }
        }
        if(currCol == nextCol){
            for(let row = Math.min(currRow, nextRow) + 1; row < Math.max(currRow, nextRow); row++){
                if(board.getPiece(Square.at(row, currCol)) != undefined){
                    return true;
                }
            }
        }
        return false;
    }
}