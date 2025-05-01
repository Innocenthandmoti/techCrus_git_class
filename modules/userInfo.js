// let's make it a default export since it is only one thing we want it to perform

export default function formatUserInfo(name, age, status) {
  return `Hello ${name}! You are ${age} years old and you are ${status}.`;
}
