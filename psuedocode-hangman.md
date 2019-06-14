##Psuedocode for Traveler's Hangman

1. Player guesses one of twenty-six possible letters

2. It is determined if the letter chosen is in the hidden word

    * The letter chosen is displayed in a list of chosen letters

    * If the letter is in the hidden word, it displays on the screen and replaces a placeholder of _

    * If the letter is not in the hidden word, the "number of guesses" counter decreases by one

    * The player may not choose a letter more than once; if this occurs, nothing will happen

3. If the player guesses all of the correct letters, the player wins and the wins counter increases by one increment

4. If the player loses all of his guesses before guessing the word, the wins counter will begin back at zero

5. Whether the player wins or loses, a new word will be chosen and new _ placeholders will appear to start a new game