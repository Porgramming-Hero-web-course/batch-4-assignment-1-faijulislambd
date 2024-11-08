# The significance of union and intersection types in Typescript.

Both the **union** and **intersection** are regarded as one of the most powerful tools for managing and a type security enhancement for you Typescript code. But what are these two types? Well let's find out:

- ### Union Type:

  As the name signifies it allows us to join multiple type parameters on a single type. This is very helpful when an api or function return multiple types of data or when need multiple custom types as well. It is defined **"|"** . For instance:-

  > type Status = string | "loading" | "success" | "error";

- ### Intersection Type:

  Intersection on the other hand is like a super powered union. Not only does it allow us to use multiple types in one type but it also allow complex compositions like defining a special type that must be included with other types or combining multiple union types in one type. For instance:-

  > type Person = { name: string };
  > type Employee = { employeeId: number };
  > type EmployeeDetails = Person & Employee;

  ## Conclusion

  All in all both types have wide variety of usage and play a significant role in enhancing the management and safety of the Typescript code.
