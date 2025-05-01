// let's make it a default export since it is only one thing we want it to perform

export default function checkAge(age) {
  if (age >= 18) {
    return "an adult";
  } else {
    return "a minor";
  }
}
