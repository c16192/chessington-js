import Square from "./square";
import {default as Player} from "./player";
import Move from "./move";
import Board from "./board";
import Piece from "./pieces/piece";
import King from "./pieces/king";
import Pawn from "./pieces/pawn";

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
                if(!this.existPieceOnMoveRoute(board, piece, currentSquare, move)){
                    moves.push(move);
                }
            }
        }
        return moves;
    }

    public static existPieceOnMoveRoute(board: Board, piece: Piece, currentSquare: Square, nextSquare: Square){
        const pieceOnNextSquare = board.getPiece(nextSquare);
        if (pieceOnNextSquare != undefined) {
            if(this.illegalMove(piece, pieceOnNextSquare)) {
                return true;
            }
        }
        if(piece.route.cross){
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
        }
        if(piece.route.diagonal) {
            const currRow = currentSquare.row;
            const currCol = currentSquare.col;
            const nextRow = nextSquare.row;
            const nextCol = nextSquare.col;
            const diagonal = Math.abs(currRow - nextRow);
            for (let rowOffset = 1; rowOffset < diagonal; rowOffset++) {
                for (let colOffset = 1; colOffset < diagonal; colOffset++) {
                    let row = currRow;
                    let col = currCol;
                    if (currRow < nextRow) {
                        row += rowOffset;
                    } else {
                        row -= rowOffset;
                    }
                    if (currCol < nextCol) {
                        col += colOffset;
                    } else {
                        col -= colOffset;
                    }
                    if (board.getPiece(Square.at(row, col)) != undefined) {
                        return true;
                    }
                }
            }

            return false;
        }
    }

    private static illegalMove(piece:Piece, pieceOnNextSquare: Piece): boolean{
        if(pieceOnNextSquare.player == piece.player){
            return true;
        }
        if(pieceOnNextSquare instanceof King){
            return true;
        }
        return false;
    }
}