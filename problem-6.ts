{
  // Problem-6 Get the number of word in sentence
  // Declaring Generic Type
  type KeyOf<T> = keyof T;

  let person: { name: string; age: number; email: string } = {
    name: "Fuad",
    age: 29,
    email: "f.faijulislam144@gmail.com",
  };

  const updateProfile = <T extends object, K extends Partial<T>>(
    person: T,
    updateValue: K
  ) => {
    for (const key in updateValue) {
      if (key in person) {
        (person as any)[key] = updateValue[key];
        return person;
      }
    }
  };

  console.log(updateProfile(person, { age: 30 }));
}
