var Word = require("word.js");
var Letter = require("Letter.js");
var prompt = require("prompt");

console.log("Hangman Game");

game = {
	wordList: ["pineapple", "avocado", "strawberry", "tomato", "durian"]
	crrntWrd: null,

	var startGame = function() {
		this.crrntWrd = new Word(this.wordList[Math.floor(Math.random()*this.wordList.length)]);
		this.crrntWrd.ltrArr();
		this.promptUser();
	},

	var promptUser = function() {
		
	}


}
