function findDuplicates(arr) {
    // I'll use it as an object of two keys: the number itself and the number of times it appeared in the full loop reading. {undefined, undefined} at beggining
    const frequencyCounter = {};
    // Will be used by just extracting the info of the numbers that have been counted more than 1 time in frequencyCounter
    const duplicates = [];

    for (const item of arr) {
        frequencyCounter[item] = (frequencyCounter[item] || 0) + 1;
        /* in fact, what's happening here is that when the frequencyCounter is read in the key of the item,
        the other key of this item (I mean the number of times it appeared) will be modified, starting as undefined which leads the command to use at the beggining the 0 
        as the key number of times for the item that is being analysed. Example: frequencyCounter[1] = undefined at the beggining, so (frequencyCounter[1] || 0) == 0 at the 
        beggining, and then frequencyCounter[1] will be {1, 0+1} = {1,1} at this point. 
        */
    }

    for (let [item, count] of Object.entries(frequencyCounter)) {
        if (count > 1) { 
            duplicates.push(item); // simple example: [{1,2}, {2,1}, {3,3}, {4,1}, {5,2}], it will print ('1','3','5')
        }
    }

    return duplicates;
}

{/* Example Test */}
const array = [40, 12, 1, 14, 40, 2, 1, 5, 5, 5, 5, 12, 13];
console.log(findDuplicates(array)); // Log expected: ['1', '5', '12', '40']

