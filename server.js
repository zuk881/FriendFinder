// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var friendList = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("public/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});


app.get("/api/friend", function (req, res) {
    res.json(friendList);
});

app.get("/api/waitlist", function (req, res) {
    res.json(waitlist);
});


// takes in JSON input
app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriends = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriends.routeName = newFriends.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriends);

    friendList.push(newFriends)


    res.json(newFriends);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });