const fs = require("fs");

const content = fs.readFileSync("README.MD", "utf-8");
const words = content.split(" ");
console.log("Total words: ", words.length);

const reactCountWords = content.match(/react/gi).length;
console.log("Total react words:  ", reactCountWords);
