{
  // Problem-5 Get the value from property

  // Declaring Generic Type
  type KeyOf<T> = keyof T;

  const person: { name: string; age: number } = { name: "Fuad", age: 29 };

  const getProperty = <T>(person: T, property: KeyOf<T>): T[KeyOf<T>] => {
    return person[property];
  };

  console.log(getProperty(person, "age"));
}
