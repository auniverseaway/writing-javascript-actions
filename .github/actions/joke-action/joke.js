const { fetch } = require('@adobe/helix-fetch');

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "User-Agent":
      "Writing JavaScript action GitHub Learning Lab course.  Visit lab.github.com or to contact us."
  }
};

async function getJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', options);
  return res.joke;
}

module.exports = getJoke;