export interface GameState {
  guessedLetters: string[];
  targetWord: string;
  currentGuess: string[];
  currentTime: number;
  isPaused: boolean;
}
