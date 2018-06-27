import GameSettings from "./gameSettings";

export default class Square {

    constructor(public row: number, public col: number) {}

    public static at(row: number, col: number): Square {
        if(row >= 0 && row < GameSettings.BOARD_SIZE && col >= 0 && col < GameSettings.BOARD_SIZE){
            return new Square(row, col);
        } else {
            return undefined;
        }
    }

    public static relative(row: number, col: number, currentSquare: Square): Square {
        return Square.at(currentSquare.row + row, currentSquare.col + col);
    }

    public equals(otherSquare: Square): boolean {
        return !!otherSquare && this.row === otherSquare.row && this.col === otherSquare.col;
    }

    public toString(): string {
        return `Row ${this.row}, Col ${this.col}`;
    }
}
