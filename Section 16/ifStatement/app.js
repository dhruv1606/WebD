//console.log("BEFORE CONDITIONAL");
//let random = Math.random();
// if (random < 0.5) {
//   console.log("Your number is less than 0.5");
//   console.log(random);
// } else {
//   console.log("Your number is greater than 0.5");
//   console.log(random);
// }

// const dayOfWeek = prompt("Enter a day").toLowerCase();

// if (dayOfWeek === "monday") {
//   console.log("UGHHH I HATE MONDAYS!");
// } else if (dayOfWeek === "saturday") {
//   console.log("YAY I LOVE SATURDAYS");
// } else if (dayOfWeek === "friday") {
//   console.log("FRIDAYS ARE DECENT EXPECIALLY AFTER WORK");
// } else {
//   console.log("MEH");
// }

// const age = 89;

// if (age < 5) {
//   console.log("You are a baby. You get in for free");
// } else if (age < 10) {
//   console.log("You are a child. You pay 10$");
// } else if (age < 65) {
//   console.log("You are an adult. You pay 20$");
// } else {
//   console.log("You are a Senior. You pay 10$");
// }

const password = prompt("Please enter a new password");

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Valid Password!");
  } else {
    console.log("Password cannot contain spaces!");
  }
} else {
  console.log("PASSWORD TOO SHORT! Must be 6+ characters");
}
