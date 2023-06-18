/*
6am - 11 am - good morning
12pm -18pm - good afternoon.
19pm -24pm - good night
0am -6am - sleeping
*/
let time = 21;
let state;

if (time >= 6 && time <= 11) {
    state = 'Good morning';
}else if (time >= 12 && time <= 18) {
    state = 'Good afternoon';
}else if (time >= 19 && time <= 24) {
    state = 'Good night';
}else if (time >= 0 && time <= 6) {
    state = 'Sleeping';
}

console.log(state);