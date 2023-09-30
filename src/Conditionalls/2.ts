let searchHistory: string[] = [
  "how to make money online",
  "benefits of eating garlic",
  "html css tutorial",
  "calisthenics",
];

// console.log(searchHistory[2]);

for (let key in searchHistory) {
  if (searchHistory.indexOf(key[2])) {
    console.log("would you like to create websites for free");
    break;
  }
  console.log("keep practising");
}

// function hasOwnProperty(): any {
//     throw new Error("Function not implemented.");
// }
