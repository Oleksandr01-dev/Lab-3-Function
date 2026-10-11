const test = require('node:test');
const assert = require('node:assert/strict');
const { generateKey } = require('./2-key.js');

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

test('generateKey returns a key of the requested length', () => {
  const key = generateKey(16, characters);

  assert.equal(key.length, 16);
});

test('generateKey uses only the provided characters', () => {
  const key = generateKey(100, characters);

  for (const character of key) {
    assert.ok(characters.includes(character));
  }
});