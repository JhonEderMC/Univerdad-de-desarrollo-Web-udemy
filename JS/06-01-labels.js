/* Labels: This is not a good pratice, don't use */

startLabel: 
//console.log('this is label start');
for (let index = 0; index <= 10; index++) {
    if(index %2 == 0){
        continue startLabel;             
    }
    console.log(index);    
}