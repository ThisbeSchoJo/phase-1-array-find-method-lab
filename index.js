// code your solution here
const record = [
    {year:"2015", result:"W"},
    {year:"2014", result:"N/A"},
    {year:"2013", result:"L"}
]

function superbowlWin(record) {
    const broncoWins = record.find((element) => {
        return element.result === "W";
    });
    return broncoWins ? broncoWins.year : undefined;
}

// function superbowlWin(wins) {
//     const broncoWins = record.find((wins) => {
//         console.log(broncoWins)
//         wins.result === "W"
//     })
// }