const college ={
    name: 'abc',
    class:[11,12],
    events:['science fair', 'victory day', '21Feb'],
        unique:{
            color:'blue',
            result:{
                gpa:5,
                merit:'top'
            }
        }
}

console.log(college);
console.log(college.name); //abc

console.log(college.unique);
console.log(college.unique.color); //blue
console.log(college.unique.result.merit);  //top


// deleting from object
delete college.unique.result.merit;
console.log(college);


