// Problem No-1 FeetToMile

function feetToMile(feet){
    const mile = feet/5280;
    return mile;
}
let checkMile = feetToMile(10);
console.log(checkMile);

// Problem No-2 woodCalculator

function woodCalculator(chair, table, bed){
    let furniture = (1 * chair) + (3 * table) + (5 * bed);
    return furniture;
}
let totalPrice = woodCalculator (2,2,2);
console.log(totalPrice);

// Problem No-3 brickCalculator
function brickCalculator(brick) {

    let building = brick;
    if (building <= 10) {
        return (building * 15 * 1000);
    } 
    else if (building <= 20) {
        return ((10 * 15) + (building - 10) * 12) * 1000;
    } 
    else return ((10 * 15) + (10 * 12) + (building - 20) * 10) * 1000;
}

let tenFloor = brickCalculator(10);
let twentyFloor = brickCalculator(20);
let twentyPlusFloor = brickCalculator(26);

console.log('First 1 to 10th floor = >', tenFloor);
console.log('Second 11 to 20th floor = >', twentyFloor);
console.log('Third 20th floor Plus = >', twentyPlusFloor);

//  Problem No-4 tinyFriend
let name = ['Pallab', 'Shasmito', 'Joy', 'Ahor'];

function tinyFriend(friend) {

    let small = friend[0].length;
    let smallest;
    for (let i = 1; i < friend.length; i++) {
        if (friend[i].length < small) {
            small = friend[i].length;
            smallest = friend[i];
        }
    }
    return smallest;
}
let myFriend = tinyFriend(name);
console.log('Show my small friends name = > ', myFriend);
