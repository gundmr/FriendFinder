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
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/tables", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know match
    tableData.push(req.body);
    res.json(true);
  });

  // ---------------------------------------------------------------------------
  // code should clear out the table while working with the functionality.

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = 0;

    res.json({ ok: true });
  });
};
