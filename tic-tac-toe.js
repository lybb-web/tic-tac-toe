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
            let gameGrid = document.createElement("div");
            for (let i = 0; i < gameboard.length; i++)
            {
                var gameRow = document.createElement("div");
                for (let j = 0; j < gameboard[i].length; j++)
                {
                    var gameCell = document.createElement("div");
                    gameCell.textContent = gameboard[i][j];
                    gameRow.appendChild(gameCell);

                }
                gameGrid.appendChild(gameRow);
            }
            body.appendChild(gameGrid);
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