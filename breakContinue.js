
//practicing break  ...when find break it stop the entire condition....
for(let i = 0; i<= 30; i++){
    console.log(i);
        if(i>=10){
            break;
        }
}

 
console.log('-------------------------------------------');

//practicing continue
for(let m =0; m<=30; m++){
   
        if(m ===10){
            continue;
        }
        console.log(m);
}


console.log('-------------------------------------');

//continue using while loop
let n =0;
while(n<15){

    n++;
    if(n%5 !==0){
        continue;
    }
    console.log(n);
}