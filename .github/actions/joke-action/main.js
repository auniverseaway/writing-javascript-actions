const getJoke = require("./joke");
const core = require("@actions/core");

async function run() {
  const joke = await getJoke();
  core.setOutput("joke-output", joke);
}

run();