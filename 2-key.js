function random (min,max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(length, characters) {
    let key = '';
    for (let i = 0; i < length; i++) {
  const index = random(characters.length - 1);
key += characters[index];
}
    return key;
}
if (require.main === module) {
  console.log(generateKey(16, characters));
}

module.exports = { generateKey };