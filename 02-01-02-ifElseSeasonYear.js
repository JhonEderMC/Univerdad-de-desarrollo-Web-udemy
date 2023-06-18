let month = 5;
let season;

if (month === 1 || month === 2 || month === 12) {
    season = 'Winter';
} else if (month >= 3 && month <= 5){
    season = 'Spring';
} else if (month >= 6 && month <= 8) {
    season = 'Summer';
} else if (month >= 9 && month <= 11) {
    season = 'Autumn';
} else {
    season = 'Wrong value';
}

console.log(season);
