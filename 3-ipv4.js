function ipToNumber(ip = '127.0.0.1') {
  const parts = ip.split('.');
  const bytes = parts.map(Number);
  const result = bytes.reduce((accumulator, byte) => {
  
  return (accumulator << 8) + byte;
}, 0);
  return result;
}


if (require.main === module) {
  console.log(ipToNumber('10.0.0.1'));
  console.log(ipToNumber());
}

module.exports = { ipToNumber };