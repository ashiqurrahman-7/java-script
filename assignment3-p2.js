function validOtp(otp) {
    // check is the given otp is string or not
    if (typeof otp !== "string") {
        return "Invalid";
    }

    // checking otp length and starting check 
    if (otp.length === 8 && otp.startsWith("ph-")) {
        return true;
    }

    return false;
}

const output = validOtp('ph-10985');
const output2 = validOtp('ph-1234');
const output3 = validOtp('abc-12345');
const output4 = validOtp(['ph-10985']);
const output5 = validOtp(12345678);
console.log(output);
console.log(output2);
console.log(output3);
console.log(output4);
console.log(output5);