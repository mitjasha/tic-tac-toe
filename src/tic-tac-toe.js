class TicTacToe {
    constructor() {
        
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null],];
        this.currentPlayerSymbol = 'o';

    }

    getCurrentPlayerSymbol() {

        return (this.currentPlayerSymbol === 'x') ? 'o' : 'x';
    }

    nextTurn(rowIndex, columnIndex) {

        if (this.board[rowIndex][columnIndex] === null){
            this.board[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.currentPlayerSymbol = this.getCurrentPlayerSymbol();
        }
    }

    isFinished(){

        return this.isDraw() || this.getWinner() !== null;
    }

    getWinner() {

        for (let i = 0; i < 3; i++){
            if (this.board[i][0] === this.board[i][1] && this.board[i][0] === this.board[i][2]){
                return this.board[i][0];

            } else if (this.board[0][i] === this.board[1][i] && this.board[0][i] === this.board[2][i]){
                return this.board[0][i];
            }
        }

        if (this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2]){
            return this.board[1][1];

        } else if (this.board[0][2] === this.board[1][1] && this.board[2][0] === this.board[1][1]){
            return this.board[1][1];
        }

        return null;
    }

    noMoreTurns() {

        return this.board.flat().includes(null) === false;
    }

    isDraw() {

        return this.getWinner() === null && this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {

        return this.board[rowIndex][colIndex];        
    }
}

module.exports = TicTacToe;
