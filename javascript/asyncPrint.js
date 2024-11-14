// async function asyncPrint(arr, delay = 1000, index = 0){
//     if (index >= arr.length) return;

//     console.log(arr[index]); 
//     await new Promise(complete => setTimeout(complete, delay));  
//     if(index == arr.length-1){
//         console.log('end')
//     }

//     asyncPrint(arr, delay * 2, index + 1);  

// }

const test2 = [4, 11, 91];
asyncPrint(test2);


async function asyncPrint(arr) {

    let delay = 1000;

    for (const item of arr) {
        console.log(item);
        return item;
        await new Promise(complete => setTimeout(complete, delay));
        delay *= 2;
    }
}

// const test = [3, 2, 1]
// console.log(asyncPrint(test))

