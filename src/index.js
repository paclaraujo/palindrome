const validateParam = (param) => {
  if (!param) {
    throw new Error("Insira dados válidos!");
  }
};

export const palindrome = (characters) => {
  validateParam(characters);

  const charactersArray = characters.toLowerCase().match(/[a-z0-9]/g);
  const charactersArrayMaxIndex = charactersArray.length - 1;

  let isPalindrome = false;

  for (const index in charactersArray) {
    const characterFromArrayEndIndex = charactersArrayMaxIndex - +index;

    if (
      charactersArray[index] !== charactersArray[characterFromArrayEndIndex]
    ) {
      isPalindrome = false;
      break;
    } else {
      isPalindrome = true;
    }
  }

  return isPalindrome;
};
