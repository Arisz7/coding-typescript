"use strict";
let searchHistory = [
    "how to make money online",
    "benefits of eating garlic",
    "html css tutorial",
    "calisthenics",
];
for (let key in searchHistory) {
    if (searchHistory.indexOf(key[2])) {
        console.log("would you like to create websites for free");
        break;
    }
    console.log("keep practising");
}
