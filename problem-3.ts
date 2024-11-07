{
  // Problem-3 Get the number of word in sentence

  const sentence: string = "I love programming! Programming fun!";
  const word: string = "programming";
  const countWordOccurrences = (sentence: string, word: string): number => {
    const searchWord: string = word.toLocaleLowerCase();
    const searchSentence: string[] = sentence.toLocaleLowerCase().split(" ");
    const numberOfSearchWord: number = searchSentence.filter(
      (word) => word.replace(/[^\w]/g, "") === searchWord
    ).length;
    return numberOfSearchWord;
  };

  console.log(
    `The number of instance of "${word}" in "${sentence}" is`,
    countWordOccurrences(sentence, word)
  );
}
