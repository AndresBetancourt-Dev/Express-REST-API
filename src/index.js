require("dotenv").config();
require("./database");
const app = require("./app");

async function main() {
  try {
    await app.listen(app.get("port"));
  } catch (error) {
    console.log(error.message);
  }
}
main();
