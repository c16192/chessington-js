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
        if(currentSquare.row == nextSquare.row){
            if(currentSquare.col < nextSquare.col){
                for(let col = currentSquare.col + 1; col <= nextSquare.col; col++){
                    if(board.getPiece(Square.at(currentSquare.row, col)) != undefined){
                        return true;
                    }
                }
            } else if(currentSquare.col > nextSquare.col) {
                for(let col = currentSquare.col - 1; col >= nextSquare.col; col--){
                    if(board.getPiece(Square.at(currentSquare.row, col)) != undefined){
                        return true;
                    }
                }
            } else {
                console.log(currentSquare);
                console.log(nextSquare);
                throw "Cannot move to the same square";
            }
        }
        if(currentSquare.col == nextSquare.col){
            if(currentSquare.row < nextSquare.row){
                for(let row = currentSquare.row + 1; row <= nextSquare.row; row++){
                    if(board.getPiece(Square.at(row, currentSquare.col)) != undefined){
                        return true;
                    }
                }
            } else if(currentSquare.row > nextSquare.row){
                for(let row = currentSquare.row - 1; row <= nextSquare.row; row--){
                    if(board.getPiece(Square.at(row, currentSquare.col)) != undefined){
                        return true;
                    }
                }
            } else {
                console.log(currentSquare);
                console.log(nextSquare);
                throw "Cannot move to the same square";
            }
        }
    }
}