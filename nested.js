const college = {
    name:'abc',
    class:['11','12'],
    unique:{
        color:'blue' ,
        result:{
            gpa:5,
            merit:'top'
        }
    }
};

// console.log(college.name);
// console.log(college.unique);
// console.log(college.unique.color);
// console.log(college.unique.result.merit);

console.log(college);
delete college.class;
console.log(college);