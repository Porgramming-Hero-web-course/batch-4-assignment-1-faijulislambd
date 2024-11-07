{
  // Problem-4 Define a union type Circle and Rectangle

  //Circle Type
  type Circle = {
    shape: "circle";
    radius: number;
  };
  //Rectangle Type
  type Rectangle = {
    shape: "rectangle";
    height: number;
    width: number;
  };

  //Shape Type

  const circleValue: Circle = {
    shape: "circle",
    radius: 5,
  };

  const rectangleValue: Rectangle = {
    shape: "rectangle",
    height: 5,
    width: 5,
  };

  type Shape = Circle | Rectangle;

  const calculateShapeArea = (shape: Shape) => {
    if (shape.shape === "circle" && typeof shape.radius === "number")
      return 3.14165 * shape.radius * shape.radius;
    if (
      shape.shape === "rectangle" &&
      typeof shape.height === "number" &&
      typeof shape.width === "number"
    )
      return shape.height * shape.width;
  };

  console.log(
    "The area value of the circle is",
    calculateShapeArea(circleValue)
  );

  console.log(
    "The area value of the rectangle is",
    calculateShapeArea(rectangleValue)
  );
}
