const core = require("@actions/core");
const github = require("@actions/github");
const { Octokit } = require("octokit");

async function run() {
  try {
    const token = core.getInput("token");
    const title = core.getInput("title");
    const body = core.getInput("body");
    const assignees = core.getInput("assignees");

    const octokit = new Octokit({
      auth: token,
    });

    const response = await octokit.request(
      "POST /repos/{owner}/{repo}/issues",
      {
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        // ...github.context.repo, this line can replace the two above
        title,
        body,
        assignees: assignees ? assignees.split("\n") : undefined,
      }
    );

    core.setOutput("issue", JSON.stringify(response.data));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
