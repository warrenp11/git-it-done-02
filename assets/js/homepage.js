var getUserRepos = function() {
    console.log("function was called");

    // fetch
    fetch("https://api.github.com/users/octocat/repos");
};

getUserRepos();