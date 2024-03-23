// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
// Explain & TIP: A type alias lets you create a custom type. It's like a shortcut for describing more complex information, such as the details of different shapes.
type Shape_Of_Object = {
  kind:"circle" | "rectangle";
  radius?:number;
  width?:number;
  height?:number;
}
let circle:Shape_Of_Object = {
  kind:"circle",
  radius:3
};
let rectangle:Shape_Of_Object = {
    kind: "rectangle",
    width: 5,
    height:4
  };
console.log(circle);
console.log(rectangle);