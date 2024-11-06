{
  // Problem-1 Sum of array

  const numberArray: number[] = [1, 2, 3, 5];

  const sumArray = (numberArray: number[]): number => {
    let sum: number = 0;
    numberArray.map((i: number) => (sum += i));
    return sum;
  };

  console.log(
    `The Sum of the array [${numberArray}] is`,
    sumArray(numberArray)
  );
}
