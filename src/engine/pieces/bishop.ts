import Piece from './piece';
import {PlayerType} from "../player";
import Board from "../board";

export default class Bishop extends Piece {
    constructor(player: PlayerType) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        return new Array(0);
    }
}
