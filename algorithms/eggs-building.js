
/* First things first, I need to know the best floor to start throwing the eggs for maximum efficiency and less attempts */

/* Whatever number of floor a building has, this formula should give me the best floor to start. Since we have 100 floors, let's calculated this for 100 */
function findOptimalStartingFloor(numberFloors) {
    let k = 0;
    let sum = 0;

    while (sum <= numberFloors) {
        k++;
        sum += k;
    }

    return k
}

findOptimalStartingFloor(100) // This gives the result 14 if user uses console.log in it

function highestSafeFloorWorstScenario(numberFloors, breakingFloor) {

    if (breakingFloor > numberFloors) {

        return numberFloors; /* In this case, the egg doesn't break in any floor of the building,
        so it makes sense to return the last floor as the highest safe floor */
    }

    let step1st = findOptimalStartingFloor(numberFloors); /* this is where the first Egg should start to be thrown */
    let currentFloor = step1st;
    let previousFloor = 0;

    /* Now let's search the point the first egg breaks */
    while (currentFloor < numberFloors) {
        if (currentFloor >= breakingFloor) {
            console.log(`At the point the first egg break, the previous floor is: ${previousFloor} and the current floor is: ${currentFloor}`)
            break; /* it means the egg is broken by this current floor and the safe floor must be between the previousFloor and the currentFloor - 1 */
        }

        step1st--;
        previousFloor = currentFloor; // guaranted as a safe floor since it didn't break in the if verification
        currentFloor += step1st;
    }

    /* Now that the first egg is broken, let's find the sweet spot with the second egg */
    for (let nextFloor = previousFloor + 1; nextFloor < currentFloor; nextFloor++) {
        if (nextFloor = breakingFloor) {
            return nextFloor - 1;
        }
    }

    return currentFloor - 1;
}


{/* Test */ }
const numberFloors = 100;
const breakingFloor = 78;

console.log(`Highest safe floor: ${highestSafeFloorWorstScenario(numberFloors, breakingFloor)}`);

