{
  class Car {
    constructor(
      public name: string,
      public model: string,
      public year: number
    ) {
      this.name = name;
      this.model = model;
      this.year = year;
    }

    getCarAge() {
      const currentYear: number = new Date().getFullYear();
      return console.log(
        `${currentYear - this.year} (assuming current year is ${currentYear})`
      );
    }
  }

  const car = new Car("Honda", "Civic", 2010);
  car.getCarAge();
}
