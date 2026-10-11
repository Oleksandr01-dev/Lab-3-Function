const iface = {
  m1: x => [x],

  m2: function (x, y) {
    return [x, y];
  },

  m3(x, y, z) {
    return [x, y, z];
  },
};
const keys = Object.keys(iface);
const functionKeys = keys.filter(
  key => typeof iface[key] === 'function'
);

const result = functionKeys.map(
  key => [key, iface[key].length]
);

if (require.main === module) {
  console.log(result);
}

module.exports = { result };