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
        let moves: Square[] = Moves.getMoves(board, this, currentSquare, movePatterns);
        let finalMoves: Square[] = this.forbidInterferingMoves(board, moves);
        finalMoves = finalMoves.concat(this.diagonalMoves(board, currentSquare));
        console.log(finalMoves);
        return finalMoves;
    }

    public moveTo(board: Board, newSquare: Square): void {
        super.moveTo(board, newSquare);
        this.hasMoved = true;
    }

    private forbidInterferingMoves(board: Board, moves: Square[]): Square[]{
        const trimmedMoves = []
        for(let move of moves){
            if(board.getPiece(move)==undefined){
                trimmedMoves.push(move);
            }
        }
        return trimmedMoves;
    }

    private diagonalMoves(board: Board, currentSquare: Square){
        let finalMoves: Square[] = [];
        let movePatterns: Move[] = [new Move(1,1), new Move(1,-1)];
        let moves: Square[] = Moves.getMoves(board, this, currentSquare, movePatterns);
        for(let move of moves){
            const pieceOnNextSquare: Piece = board.getPiece(move);
            if(pieceOnNextSquare != undefined && pieceOnNextSquare.player != this.player){
                finalMoves.push(move);
            }
        }
        return finalMoves
    }
}
