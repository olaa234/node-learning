const fs = require("fs");

// reading files

// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// console.log("last line");

// writing files

// fs.writeFile("./docs/blog1.txt", "Where is the money", () => {
//   console.log("file was written with ease");
// });

// fs.writeFile("./docs/blog3.txt", "Money is coming", () => {
//   console.log("file was written with ease");
// });

// directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

// deleting files

if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/delete.txt", (err) => {
    if (err) {
      console.log("err");
    }
    console.log("files deleted");
  });
}
