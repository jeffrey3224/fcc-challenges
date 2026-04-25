/* 

Rules: 

Today is Earth Day. Given an array of items you cleaned up, return your total cleanup score based on the rules below.

A Rare item is represented as ["rare", value]. For example, ["rare", 80]. Rare items do not get a streak bonus.

Streak bonus: If the same item appears consecutively, it gets increasing bonus points.

First consecutive occurrence: base value
Second: base value + 1
Third: base value + 2
etc.

Fifth Item Multiplier: Every fifth item collected gets a multiplier.

Fifth item: *2
Tenth item: *3
etc.

Apply the multiplier after calculating any bonuses.
*/

const allItems = {
    "bottle": 10,
    "can": 6,
    "bag": 8,
    "tire": 35,
    "straw": 4,
    "cardboard": 3,
    "newspaper": 3,
    "shoe": 12,
    "electronics": 25,
    "battery": 18,
    "mattress": 38,
}

function getCleanupScore(items) {

let score = 0;
let retrievedItems = [];
let streakBonus = 0;

items.forEach((item, index) => {

    let itemScore = 0;
    let isRare = false;

    if (Array.isArray(item)) {
        isRare = true;
    }

    // check if item is a rare item first
    let baseScore = isRare ? item[1] : allItems[item];
    
    // check for streak second
    const streak = !isRare && item === retrievedItems[index - 1]

    if (streak) {
      streakBonus += 1
    }

    else {streakBonus = 0}
    
    // item score is updated
    itemScore += isRare ? baseScore : (baseScore + streakBonus);

    // check if it's a multiplier item
    if ((index + 1) % 5 === 0) {
        const multiplier = Math.floor((index + 1) / 5 + 1);

        // item score is updated using multiplier
        itemScore *= multiplier;
    }

    // update functions
    
    retrievedItems.push(item);
    score += itemScore;

});

console.log(score);
return score;
}

getCleanupScore(["bottle", "can", "can", "shoe", "shoe", ["rare", 56], "bottle", "bottle", "can", "can", "electronics", "bottle", ["rare", 48], "bottle", "can", "can", "can", "can", "can", "can", "can"]);