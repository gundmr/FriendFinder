// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
    name: "Bill Murray",
    photo: " https://fillmurray.com/200/300",
    score: [
      1,
      5,
      2
    ]
  },
  {
    name: "Nic Cage",
    photo: "https://www.placecage.com/c/200/300",
    score: [
      5,
      1,
      3
    ]
  },
  {
    name: "Bacon",
    photo: "https://baconmockup.com/300/200",
    score: [
      2,
      3,
      1
    ]
  },
  {
    name: "Mr. Segal",
    photo: "https://stevensegallery.com/g/200/300",
    score: [
      4,
      2,
      1
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;



