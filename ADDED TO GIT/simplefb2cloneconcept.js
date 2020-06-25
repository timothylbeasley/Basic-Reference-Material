//Establishing users
var user1 = {
    username: "joe",
    password: "passmeyo",
}
var user2 = {
    username: "joanna",
    password: "babybaby",
}
var user3 = {
        username: "nambones",
        password: "sachkhand",
    }
    //Establishing newsfeeds
var page1 = {
    username: "catlover",
    timeline: "cat",
}
var page2 = {
    username: "doglover",
    timeline: "rufftimes",
}
var page3 = {
        username: "birdlover",
        timeline: "flyaway",
    }
    //Establishing database and newsfeed for each user
var database = [user1, user2, user3];
var newsfeed = [page1, page2, page3];

//Login Info
var userNamePrompt = prompt("What's your Username?");
var passwordPrompt = prompt("What's your Password?");

//Login Function
function signIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsfeed);
    } else {
        console.log("Sorry, wrong username or password");
    }
}

//Calling Login Function
signIn(userNamePrompt, passwordPrompt);