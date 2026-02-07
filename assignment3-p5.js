function analyzeText(str) {
    // ইনপুট string কিনা চেক
    if (typeof str !== "string") {
        return "Invalid";
    }

    // শুধুমাত্র স্পেস বাদ দিয়ে চেক
    const trimmedStr = str.trim();
    if (trimmedStr.length === 0) {
        return "Invalid";
    }

    // শব্দগুলোর Array বানানো
    const words = trimmedStr.split(" "); 
    // .filter(word => word.length > 0)

    // সবচেয়ে বড় শব্দ খুঁজে বের করা
    let longWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longWord.length) {
            longWord = words[i];
        }
    }

    // total character count (স্পেস বাদ দিয়ে)
    const token = words.join("").length;

    // রিটার্ন Object
    return {
        longwords: longWord,
        token: token
    };
}

const output =analyzeText("I am a little honest person");
const output1 =analyzeText("Hello world");
const output2 =analyzeText("Keep coding keep shining");
const output3 =analyzeText(12345);


console.log(output);
console.log(output1);
console.log(output2);
console.log(output3);
