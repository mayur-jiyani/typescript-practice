// const person1: {
//   name: string;
//   age: number;
//   role: [number, string];
// } = {
//   name: "mayur",
//   age: 21,
//   role: [2, "student"],
// };

// person1.role[0] = 1;

// const person = {
//   name: "mayur",
//   age: 22,
//   hobbies: ["sports", "reading"],
// };

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
//   //   console.log(hobby.map()); //ERROR
// }

enum Role {
  ADMIN = 50,
  READ_ONLY = 100,
  AUTHOR = "author",
}
const person = {
  name: "mayur",
  age: 21,
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log(Role.AUTHOR);
}
