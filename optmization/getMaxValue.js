function getMaxValue(carrotTypes, capacity) {

    const maxValueForCapacity = [];
    for (let j = 0; j <= capacity; j++) {
        maxValueForCapacity[j] = 0; // Initialize each position with 0
    }

    for (let i = 0; i <= capacity; i++) {
        /* This loop calculates the maximum value for each incremental capacity, from 0 up to the bag's max capacity */
        for (let carrot of carrotTypes) {
            if (carrot.kg <= i) {
                let currentValue = maxValueForCapacity[i]; // Current max value for this capacity without including the current carrot
                let valueWithCarrot = maxValueForCapacity[i - carrot.kg] + carrot.price; // Value if include this carrot
                /*
                Example: i=6 
                {kg: 5, price: 100}
                currentValue = maxValueForCapacity[6] = 0 / 
                valueWithCarrot = maxValueForCapacity[6 - 5] + 100 = maxValueForCapacity[1] + 100 = 0 + 100 = 100 

                {kg: 7, price: 150} -> skipped because 7>6

                {kg: 3, price: 70}
                currentValue = maxValueForCapacity[6] = 100 (found on kg: 5, price: 100)
                valueWithCarrot = maxValueForCapacity[6 - 3] + 70 = maxValueForCapacity[3] + 70 = 70 + 70 = 140
                */

                if (valueWithCarrot > currentValue) {
                    maxValueForCapacity[i] = valueWithCarrot;
                } else {
                    maxValueForCapacity[i] = currentValue;
                }
            }
        }
    }

    return maxValueForCapacity[capacity] // the last item of the array
}


{/*Example*/ }

const carrotTypes = [{ kg: 5, price: 100 }, { kg: 7, price: 150 }, { kg: 3, price: 70 }]

capacity = 200 //kg

console.log(getMaxValue(carrotTypes, capacity))