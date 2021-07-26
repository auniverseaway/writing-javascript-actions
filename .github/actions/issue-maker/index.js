const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const token = core.getInput("repo-token");
    const octokit = new github.getOctokit(token);

    const lh = '100';
    const lhColor = 'brightgreen';

    const fcp = '0.8s';
    const fcpColor = 'brightgreen';

    const lcp = '1.4s';
    const lcpColor = 'brightgreen';

    const tbt = '90ms';
    const tbtColor = 'brightgreen';

    const cls = '0.001';
    const clsColor = 'brightgreen';

    const body = `![Lighthouse](https://img.shields.io/badge/LH-${lh}-${lhColor}?style=flat-square) ![First Contentful Pain](https://img.shields.io/badge/${fcp}-0.8s-${fcpColor}?style=flat-square) ![Largest Contentful Pain](https://img.shields.io/badge/LCP-${lcp}-${lcpColor}?style=flat-square) ![Total Blocking Time](https://img.shields.io/badge/TBT-${tbt}-${tbtColor}?style=flat-square) ![Cumulative Layout Shift](https://img.shields.io/badge/CLS-${cls}-${clsColor}?style=flat-square)`;

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