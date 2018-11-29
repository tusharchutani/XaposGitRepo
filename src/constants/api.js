
export const ALL_REPOS = (username="facebook") => `https://api.github.com/orgs/${username}/repos`;
export const README_URL_API = (repoName, owner='facebook') => (`https://api.github.com/repos/${owner}/${repoName}/readme`)
