const TicTacToeGame = (function(){

    var score = 0;
    var body  = document.querySelector("body");
    var gameboard = [[0,0,0], [0,0,0], [0,0,0]];

    // function Player(name)
    // {
    //     this.name = name;
    // }
    
    const startGame = () => {
        
        populatePage();
        var g = makeGameBoard();
        bindGameboardListener();
        setPlayers();
        var hasWinner = false;
        var turn = 1;
        // while (!hasWinner)
        // {
        //     if (turn > 0)
        //     {

        //     }
        //     hasWinner = true;
        // }

        function populatePage()
        {
            var title = document.createElement("h1");
            title.textContent = "Tic Tac Toe";
            body.appendChild(title);
        }

        function makeGameBoard()
        {
            let gameGrid = document.createElement("div");
            gameGrid.id = "game-grid";
            for (let i = 0; i < gameboard.length; i++)
            {
                var gameRow = document.createElement("div");
                for (let j = 0; j < gameboard[i].length; j++)
                {
                    var gameCell = document.createElement("div");
                    gameCell.textContent = gameboard[i][j];
                    gameCell.id = "game-cell-" + (i* 3 + j+1);
                    gameCell.classList.add("game-cell");
                    gameRow.appendChild(gameCell);

                }
                gameRow.id = "game-row-" + (i+1);
                gameRow.classList.add("game-row");
                gameGrid.appendChild(gameRow);
            }
            body.appendChild(gameGrid);
            console.log(gameboard);
            return gameGrid;
        }
        function setPlayers()
        {
            let number = 0;
            function createPlayer(name)
            {
                number += 1;
                let score = 0;
                const marker = number == 1 ? "O" : "X";

                
                return {name, number, score, marker};
            }
            var playerDisplay = document.createElement("div");
            playerDisplay.id = "player-display";
            playerOne = createPlayer("p1");
            playerTwo = createPlayer("p2");
            players = [playerOne, playerTwo];
            console.log(playerOne);
            for (let i = 0; i < number; i ++)
            {
                //adding playername element
                var playerDiv = document.createElement("div");
                playerDiv.id = "player-" + players[i].number;
                playerDiv.textContent = players[i].name;
                playerDisplay.appendChild(playerDiv);

                //adding playerscore element
                var playerScore = document.createElement("div");
                playerScore.id = "player-" + players[i].number + "-score";
                playerScore.textContent = players[i].score;
                playerDisplay.appendChild(playerScore);
            }
            body.insertBefore(playerDisplay, body.firstChild);
        }

        function updateGameboard(n, m)
        {
            var cellNumber = n - '0' - 1;
            gameboard[Math.floor(cellNumber / 3)][cellNumber % 3] = m;
            if (checkValidWin(m))
            {
                var winnerPlayerScoreDiv;
                if (m == "O")
                {
                    
                    console.log("Player 1 Wins!");
                    playerOne.score += 1;
                    winnerPlayerScoreDiv = document.getElementById("player-1-score");
                    winnerPlayerScoreDiv.textContent = playerOne.score;
                }
                else 
                {
                    console.log("Player 2 Wins!");
                    playerTwo.score += 1;
                    winnerPlayerScoreDiv = document.getElementById("player-2-score");
                    winnerPlayerScoreDiv.textContent = playerTwo.score;
                }
                var resetButton = document.createElement("button");
                resetButton.textContent = "Reset Game";
                resetButton.id = "reset-button";
                body.appendChild(resetButton);


                resetButton.addEventListener("click", (e) => 
                {
                    document.getElementById("reset-button").remove();
                    document.getElementById("game-grid").remove();
                    gameboard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
                    g = makeGameBoard();
                    bindGameboardListener();
                })
            }

        }

        function checkValidWin(m)
        {
            function checkRows()
            {
                for (let i = 0; i < 3; i ++)
                {
                    var count = 0;
                    for (let j = 0; j < 3; j++)
                    {
                        
                        if (gameboard[i][j] == m)
                        {
                            count += 1;
                        }
                    }
                    if (count == 3)
                    {
                        return true;
                    }
                }
                return false;
            }
            function checkColumns()
            {
                for (let i = 0; i < 3; i++)
                {
                    var count = 0;
                    for (let j = 0; j < 3; j++)
                    {
                        if (gameboard[j][i] == m)
                        {
                            count+= 1;
                        }
                    }
                    if (count == 3)
                    {
                        return true;
                    }
                }
                return false
            }
            function checkDiagonals()
            {
                var count = 0;
                for (let i = 0; i < 3; i++)
                {
                    
                    if (gameboard[i][i] == m)
                    {
                        count+= 1;
                    }
                    
                }
                if (count == 3)
                    {
                        return true;
                    }
                if (gameboard[2][0] == gameboard[1][1] && gameboard[2][0] == gameboard[0][2] && gameboard[2][0] == m)
                {
                    return true;
                }
                return false
            }
            return checkRows() || checkColumns()|| checkDiagonals() ? true : false;
        }

        function bindGameboardListener()
        {

        
            g.addEventListener("click", (e) =>
            {
                if (!document.getElementById("reset-button"))
                {

                
                    let target = e.target;
                    let currentMark = turn > 0 ? "O" : "X";
                    if (target.classList.hasOwnProperty('game-cell'))
                    {
                        console.log(target.textContent);
                    }
                    if (target.textContent != "O" && target.textContent != "X")
                    {
                        target.textContent = currentMark;
                        updateGameboard(target.id[target.id.length -1], target.textContent)
                        turn *= -1;
                    }
                }
                
            })
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