import Piece from './piece';
import Board from "../board";
import {PlayerType} from "../player";

export default class Rook extends Piece {
    constructor(player: PlayerType) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        return new Array(0);
    }
}
