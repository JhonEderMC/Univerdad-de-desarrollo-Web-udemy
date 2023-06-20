/* word continue -> go to the next iteration of cycle  */

for (let index = 0; index <= 10; index++) {
    if(index %2 == 0){
        continue;             
    }
    console.log(index);    
}