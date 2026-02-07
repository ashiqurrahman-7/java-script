function finalScore(omr) {
   // ইনপুট Object কিনা চেক
    if (typeof omr !== "object" || omr === null || Array.isArray(omr)) {
        return "Invalid";
    }

    const right = omr.right;
    const wrong = omr.wrong;
    const skip = omr.skip;

    // প্রপার্টিগুলো number কিনা চেক
    if (
        typeof right !== "number" ||
        typeof wrong !== "number" ||
        typeof skip !== "number"
    ) {
        return "Invalid";
    }

    // মোট প্রশ্ন ১০০ কিনা চেক
    if (right + wrong + skip !== 100) {
        return "Invalid";
    }

    // স্কোর হিসাব
    const score = right * 1 - wrong * 0.5;

    // Rounded ফাইনাল স্কোর রিটার্ন
    return Math.round(score);
}


const output1= finalScore({ right: 67, wrong: 23, skip: 10 });
const output2= finalScore({ right: 80, wrong: 25, skip: 0 });
const output3= finalScore({ right: 50, wrong: 10, skip: 40 });
const output4= finalScore({ right: 30, wrong: 30, skip: 40 });
const output6= finalScore("!@#");
const output7= finalScore(["Raj"]);
const output8 = finalScore(null);
console.log(output1);
console.log(output2);
console.log(output3);
console.log(output4);
console.log(output6)
console.log(output7);
console.log(output8);