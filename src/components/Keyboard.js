// Define the Enigma machine keyboard
const enigmaKeyboard = [
    'Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Y', 'X', 'C', 'V', 'B', 'N', 'M'
  ];
  
  // Function to encrypt a letter using the Enigma machine
  function encrypt(letter) {
    const uppercaseLetter = letter.toUpperCase();
    
    // Check if the letter exists on the Enigma machine keyboard
    const index = enigmaKeyboard.indexOf(uppercaseLetter);
    if (index === -1) {
      // Letter not found on the keyboard, return the original letter
      return letter;
    }
    
    // Encrypt the letter by swapping it with the adjacent letter
    const encryptedIndex = (index + 1) % enigmaKeyboard.length;
    return enigmaKeyboard[encryptedIndex];
  }
  
  // Example usage
  const inputLetter = 'A';
  const encryptedLetter = encrypt(inputLetter);
  console.log(`Input: ${inputLetter}, Encrypted: ${encryptedLetter}`);