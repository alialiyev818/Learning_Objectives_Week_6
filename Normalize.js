// Task 1:
function proper(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  
  // Task 2:
  function normalizeWord(word) {
    let normalizedWord = '';
    for (let i = 0; i < word.length; i += 2) {
      normalizedWord += proper(word.substring(i, i + 2));
    }
    return normalizedWord;
  }
  
  // Task 3:
  function normalizeSentence(sentence) {
    return sentence.split(' ').map(normalizeWord).join(' ');
  }
  
  // Task 4:
  function promptAndNormalize() {
    const fullName = prompt('Please enter your full name:');
    const normalizedFullName = normalizeSentence(fullName);
    alert('Normalized name: ' + normalizedFullName);
  }
  
  // To normalize:
  promptAndNormalize();