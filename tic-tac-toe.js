const TicTacToeGame = (function(){

    var score = 0;
    var body  = document.querySelector("body");
    var gameboard = [[0,0,0], [0,0,0], [0,0,0]];
    const startGame = () => {
        
        console.log("Hello World!");
        populatePage();
        makeGameBoard();
        function populatePage()
        {
            var title = document.createElement("h1");
            title.textContent = "Tic Tac Toe";
            body.appendChild(title);
        }

        function makeGameBoard()
        {
            console.log(gameboard);
        }
    };

    const getScore = () => {
        score++;
        console.log(score);
    }
    

    return {
        startGame,
        getScore,
    }
})();

TicTacToeGame.startGame();
TicTacToeGame.getScore();