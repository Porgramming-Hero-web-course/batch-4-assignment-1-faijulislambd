{
  // Problem-8 Check if keys exist

  const person: { name: string; age: number; email: string } = {
    name: "Fuad",
    age: 29,
    email: "f.faijulislam144@gmail.com",
  };

  const arrayOfKeys: (keyof typeof person)[] = ["name", "age"];

  const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]) => {
    return keys.every((key) => key in obj);
  };

  console.log(validateKeys(person, arrayOfKeys));
}
