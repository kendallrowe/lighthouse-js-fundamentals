const temperature = 12;
const raining = true;

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea...");
} else if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

if(!raining) {
  console.log("Leave your umbrella at home!");
}

console.log("Now you're ready to go outside!");

