// Helper function to capitalize the first letter of each word in a sentence
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  // Example of usage:
  const sentenceToCapitalize = "hello world, how are you?";
  const capitalizedSentence = capitalizeWords(sentenceToCapitalize);
  console.log(`Original: ${sentenceToCapitalize}\nCapitalized: ${capitalizedSentence}`);
  