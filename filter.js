// filter fuction

const arrOfCourses = [
  { id: 1, name: "html" },
  { id: 2, name: "css" },
  { id: 3, name: "javascript" }
];

const courseName = arrOfCourses.filter(tempVar => tempVar.name === "html");

console.log(courseName);
