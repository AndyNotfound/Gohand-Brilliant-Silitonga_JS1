// Heartbroken JavaScript Example by Gohand Brilliant Silitonga

// Variables
let heartStatus = "happy";

// Function to check the heart's status
function checkHeart() {
  switch (heartStatus) {
    case "happy":
      console.log("Heart is happy ❤️");
      break;
    case "confused":
      console.log("Heart is confused 💔");
      break;
    case "broken":
      console.log("Heart is broken 💔💔");
      break;
    default:
      console.log("Heart is in an unknown state 💔❓");
  }
}

// Initial check
// Still happy at this point
checkHeart();

// Heartbreak stages
// But, I don't deserve happiness ...
if (heartStatus === "happy") {
  console.log("Heartbreak begins...");
  heartStatus = "confused";
}

// Nested if statements
// What is going on exactly?
if (heartStatus === "confused") {
  console.log("Heart is more confused...");
  if (Math.random() < 0.5) {
    heartStatus = "happy";
  } else {
    heartStatus = "broken";
  }
}

// For loop for healing attempts
// Ah, I will always be broken haha
for (let i = 0; i < 3; i++) {
  console.log("Trying to heal the heart...");
  if (heartStatus === "broken") {
    console.log("Healing attempt " + (i + 1) + ": Failed 💔");
  } else {
    console.log("Healing attempt " + (i + 1) + ": Successful ❤️");
    break;
  }
}

// While loop for endless heartache
// I finally let go of her
let attempts = 0;
while (heartStatus === "broken") {
  console.log("Endless heartache... 💔");
  attempts++;
  if (attempts >= 5) {
    heartStatus = "happy";
    console.log("Heart finally healed! ❤️");
  }
}

// Function call to check heart's final status
// I'm happy again, but really tho?
checkHeart();
