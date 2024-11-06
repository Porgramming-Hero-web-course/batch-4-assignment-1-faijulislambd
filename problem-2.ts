{
  // Problem-2 Get Unique Values Only

  const numberArray: number[] = [1, 2, 2, 4, 2, 1, 6, 5];

  const removeDuplicates = (numberArray: number[]): number[] => {
    return numberArray.filter((num, index, self) => self.indexOf(num) == index);
  };

  console.log(
    `The Unique Array of [${numberArray}] is [` +
      removeDuplicates(numberArray) +
      "]"
  );
}
