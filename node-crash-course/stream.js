const fs = require("fs");

const readstream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});

const writestream = fs.createWriteStream("./docs/blog4.txt");

// readstream.on("data", (chunk) => {
//   console.log("......NEW CHUNK.......");
//   console.log(chunk);
//   writestream.write("\nNEW CHUNK\n");
//   writeStream.write(chunk);
//   // console.log(chunk.toString());
// });

// piping

readstream.pipe(writestream);
