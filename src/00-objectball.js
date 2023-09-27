

function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
              
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                
            },
        },
    };
}

function numPointsScored(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].players.hasOwnProperty(playerName)) {
            return game[team].players[playerName].points;
        }
    }
    return "Player not found";
}
function shoeSize(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].players.hasOwnProperty(playerName)) {
            return game[team].players[playerName].shoe;
        }
    }
    return "Player not found";
}
function teamColors(teamName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
    return "Team not found";
}

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
    const game = gameObject();
    const teamPlayers = [];
    for (const team in game) {
        if (game[team].teamName === teamName) {
            for (const player in game[team].players) {
                teamPlayers.push(game[team].players[player].number);
            }
        }
    }
    return teamPlayers;
}

function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].players.hasOwnProperty(playerName)) {
            return game[team].players[playerName];
        }
    }
    return "Player not found";
}
function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;
    for (const team in game) {
        for (const player in game[team].players) {
            if (game[team].players[player].shoe > largestShoeSize) {
                largestShoeSize = game[team].players[player].shoe;
                rebounds = game[team].players[player].rebounds;
            }
        }
    }
    return rebounds;
}
