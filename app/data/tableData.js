// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
    Name: "Ahmed",
    Photo: "ahmed@example.com",
    Question1: 1,
    Question2: 1,
    Question3: 1,
    Question4: 1
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
