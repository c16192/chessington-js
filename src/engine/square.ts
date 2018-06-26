export default class Square {

    constructor(public row: number, public col: number) {}

    public static at(row: number, col: number): Square {
        return new Square(row, col);
    }

    public equals(otherSquare: Square): boolean {
        return !!otherSquare && this.row === otherSquare.row && this.col === otherSquare.col;
    }

    public toString(): string {
        return `Row ${this.row}, Col ${this.col}`;
    }
}
