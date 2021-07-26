const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const token = core.getInput("repo-token");
    const octokit = new github.getOctokit(token);

    const body = `![Lighthouse](https://img.shields.io/badge/LH-100-brightgreen?style=flat-square) 
                  ![First Contentful Pain](https://img.shields.io/badge/FCP-0.8s-brightgreen?style=flat-square) 
                  ![Largest Contentful Pain](https://img.shields.io/badge/LCP-1.4s-brightgreen?style=flat-square) 
                  ![Total Blocking Time](https://img.shields.io/badge/TBT-90ms-brightgreen?style=flat-square) 
                  ![Cumulative Layout Shift](https://img.shields.io/badge/CLS-0s-brightgreen?style=flat-square)`;

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