function gonoVote(array) {
    // ইনপুট Array কিনা চেক
    if (!Array.isArray(array)) {
        return "Invalid";
    }

    // ha এবং na গণনা করার জন্য ভ্যারিয়েবল
    let haCount = 0;
    let naCount = 0;

    // Array loop করে গণনা
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "ha") {
            haCount++;
        } else if (array[i] === "na") {
            naCount++;
        }
    }

    // Result নির্ধারণ
    if (haCount > naCount) {
        return true;
    } else if (haCount === naCount) {
        return "equal";
    } else {
        return false;
    }
}


const output = gonoVote(["ha", "na", "ha", "na"]);
const output1 = gonoVote(["ha", "na", "na"]);
const output2= gonoVote(["ha", "ha", "ha", "na"]);
const output3 = gonoVote("ha, na, ha, ha,ha");
const output4 = gonoVote(12345);

console.log(output);
console.log(output1);
console.log(output2);
console.log(output3);
console.log(output4);