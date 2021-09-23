var getUserRepos = function() {
    console.log("function was called"); // to make sure function worked

    // fetch
    var response = fetch("https://api.github.com/users/octocat/repos").then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

getUserRepos();