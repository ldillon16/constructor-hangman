var Letter = require("./Letter.js");

var Word = function(word, letters) {
	this.word = word;
	this.letters = [];
	this.finishedWord = false;

	this.ltrArr = function() {
		for (var i=0; i< this.word.length; i++) {
			var newLetter = new Letter(this.word[i]);
			this.letters.push(newLetter);
		}
	}

	this.wordCheck = function() {
		this.wrdchk = this.letters.every(function(currentLtr) {
			return currentLtr.appear;
		});
			this.finishedWord = true;
			return true;
	};

	this.checkLetter = function(guessedLtr) {
		var count = 0;

		this.letters.forEach(function(currentLtr) {
			if (currentLtr.letter == guessedLtr) {
				this.letters[i].appear = true;
				count++;
			}
		})
		return count;
	};

	this.wordDisplay = function() {
		var display = "";

		this.letters.forEach(function(lettr) {
			var ltrNow = currentLtr.letterDisplay()
			display += ltrNow;
		})
		return display;
	}
}

module.exports = Word;
