//business logic

export function diceRoll() {
    return Math.floor(Math.random() * 6) + 1;
};

export function Game() {
    this.players = {}
    this.currentPlayer = 1
    this.currentId = 0;
};

Game.prototype.assignId = function() {
    this.currentId += 1
    return this.currentId;
}

Game.prototype.setActivePlayer = function() {
    if (this.currentPlayer === 1) {
    this.currentPlayer = 2;
    } else if (this.currentPlayer === 2) {
    this.currentPlayer =1;
    }
}
    
Game.prototype.addPlayer = function(player) {
    player.id = this.assignId();
    this.players[player.id] = player;
};

export function Player(name) {
    this.name = name;
    this.tempScore = 0;
    this.permScore = 0;
};