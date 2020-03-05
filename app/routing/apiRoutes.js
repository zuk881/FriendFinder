
// Load Data
// Linking our data source holding our survey array
const friends = require('../data/friends');

// ROUTING
module.exports = function (app) {

    // API get request
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })

    // API POST requests, sends data to the friendsList array when a form is submitted
    app.post("/api/friends", function (req, res) {
        // respond true if post request is sucessful
        res.json(true);

        // set variable to compare scores against
        var lowestScore = 100;

        // variable to store new survey submission
        var newFriend = req.body;
        
        // variable to store the location of friends
        var index;

        // loop through existing surveys to find scores
        for (var i = 0; i < friends.length; i++) {
            var scores = friends[i].scores;
            // create an array to hold score differences
            var total = [];

            // loop through new survey to get that score for comparison
            for (var j = 0; j < scores.length; j++) {
                var diff = Math.abs(newFriend.scores[j] - scores[j]);
                // push difference of scores into total array
                total.push(diff);
            }

            // testing and debugging
            console.log("total " + total);

            // loop through total array and add up the total value
            var totalDiff = 0;
            total.forEach(num => {
                totalDiff += num;
            });
            // testing and debugging
            console.log("totalDiff " + totalDiff);

            // check if totalDiff is less then lowestScore
            if (totalDiff < lowestScore) {
                // if so lowestScore should be updated to be equal to totalDiff
                lowestScore = totalDiff;
                // set index variable to position of lowest score
                index = i;
            }

            // testing and debugging
            console.log('==========================');
            console.log("lowestScore " + lowestScore);

        }
        //  testing and debugging 
        console.log(friends[index]);

        // push survey into array
        friends.push(req.body);
    })
}

