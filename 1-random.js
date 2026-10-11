function random (min,max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
if (require.main === module) {
  console.log(random(5, 10));
  console.log(random(10));
}

module.exports = { random };