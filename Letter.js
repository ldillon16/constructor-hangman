//index calls word list for a random word
//index calls word(newWord)
//word calls new Letter for each letter in newWord
//Letter creates an object with the letter and isGuessed:false for each letter

//based on guess index does the thing, changes the values



var Letter = function(letter){
	this.letter = letter;
	this.isGuessed = false;

	this.check = function() {
		if (userGuess == this.letter) {
			this.isGuessed = true
		}
	}

	this.letterAppear = function() {
		if (this.isGuessed) {
  			return " _";
		} else {
			return this.letter
		}
	}
}

module.exports = Letter
