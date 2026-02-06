function getMax(numbers){

    let max = numbers[0];
    for (const num of numbers){
        if(num>max){
            max = num;
        }
    }
    return max;
}

const heights = [65,56,66,72,78,65,66]
const max = getMax(heights);
console.log(max);