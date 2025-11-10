import { describe, expect, test } from 'vitest';

import { sum, addArray } from '../../src/helpers/sum';

describe('Add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    //Preparación
    const a = 1;
    const b = 4;

    //Estimulo
    const result = sum(a, b);

    //El comportamiento esperado
    expect(result).toBe(a + b);
  });
});
describe('addArray function', () => {
  test('adds a array of number to equals de summatory of its numbers', () => {
    const n1 = 1;
    const n2 = 5;
    const n3 = 6;
    const n4 = 2;

    const arr = [n1, n2, n3, n4];

    const result = addArray(arr);

    expect(result).toBe(n1 + n2 + n3 + n4);
  });

  test('should return 0 if the array is empty', () => {
    const arr = [];

    const result = addArray(arr);

    expect(result).toBe(0);
  });
});
