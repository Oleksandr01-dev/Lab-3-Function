const test = require('node:test');
const assert = require('node:assert/strict');
const { ipToNumber } = require('./3-ipv4.js');

test('ipToNumber converts IPv4 addresses to numbers', () => {
  assert.equal(ipToNumber('10.0.0.1'), 167772161);
  assert.equal(ipToNumber('127.0.0.1'), 2130706433);
  assert.equal(ipToNumber('192.168.1.10'), -1062731510);
  assert.equal(ipToNumber('0.0.0.0'), 0);
  assert.equal(ipToNumber('8.8.8.8'), 0x08080808);
});

test('ipToNumber uses 127.0.0.1 by default', () => {
  assert.equal(ipToNumber(), 2130706433);
});