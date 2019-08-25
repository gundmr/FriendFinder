// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var tableData = require("../data/tableData"); 



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // ---------------------------------------------------------------------------

  app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // ---------------------------------------------------------------------------

  app.post("/api/tables", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know match
    var user = req.body;

    //parseInt for score
    for(var i = 0; i < user.score.length; i++){
      user.score[i] = parseInt(user.score[i]);
    }

    //default friend match is the first friend but will be whoever has lowest difference in score
    var bestFriendIndex = 0;
    var minimumDifference = 40;

    //in this for-loop, start off with 0 difference and compare the user and the '-th friend score one at a time
    //whatever the difference is, add to total difference
    for(var i = 0; i < tableData.length; i++){
      var totalDifference = 0;
      for(var j = 0; j < tableData[i].score.length; j++) {
        var difference = Math.abs(user.score[j] - tableData[i].score[j]);
        totalDifference += difference;
      }

      //if there is a new minimum, change the index and set the new minimum
      if(totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
      }
    }

    //after finding match, add user to friend array
    //tableData.push(req.body);
    tableData.push(user);

    // send best match to browser
    //res.json(true);
    res.json(tableData[bestFriendIndex]);
  });

  // ---------------------------------------------------------------------------
  // code should clear out the table while working with the functionality.

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = 0;

    res.json({ ok: true });
  });
};
