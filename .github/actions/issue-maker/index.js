const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const token = core.getInput("repo-token");

    const octokit = new github.getOctokit(token);

    const issue_number = github.context.payload.pull_request.number;
    const owner = github.context.repo.owner;
    const repo = github.context.repo.repo;
    const newComment = octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number,
      body,
    });

    // const newIssue = octokit.rest.issues.create({
    //   repo: github.context.repo.repo,
    //   owner: github.context.repo.owner,
    //   title: issueTitle,
    //   body: jokeBody
    // });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();