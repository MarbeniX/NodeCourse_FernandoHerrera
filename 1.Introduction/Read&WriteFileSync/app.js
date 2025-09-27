const fs = require("fs");
const data = fs.readFileSync("README.md", "utf8");

//Change the word "react" to "Angular"
const updatedData = data.replace(/React/g, "Angular");
fs.writeFileSync("README_Angular.md", updatedData, "utf8");
