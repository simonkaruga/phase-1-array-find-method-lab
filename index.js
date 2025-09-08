const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]
function superbowlWin(record) {
    const win = record.find(item => item.result === "W");
    return win ? win.year : undefined;
}

// You can test the function with the following line:
// console.log(superbowlWin(record)); // Should return "2015"

module.exports = { superbowlWin };
