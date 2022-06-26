import assert from 'node:assert'
import { diagonal, antidiagonal, area, row, col } from './index.js'

const val = c => c.val

const arr = [
  ['a', 'b', 'c', 'd', 'e'],
  ['f', 'g', 'h', 'i', 'j'],
  ['k', 'l', 'm', 'n', 'o'],
  ['p', 'q', 'r', 's', 't'],
  ['u', 'v', 'w', 'x', 'y']
]
assert.deepEqual(diagonal(arr, 1, 0).map(val), ['f', 'l', 'r', 'x'])
assert.deepEqual(antidiagonal(arr, 2, 1).map(val), ['d', 'h', 'l', 'p'])
assert.deepEqual(area(arr, [2, 3], [1, 1]).flat().map(val), ['g', 'h', 'i', 'l', 'm', 'n'])
assert.deepEqual(row(arr, 1).map(val), ['f', 'g', 'h', 'i', 'j'])
assert.deepEqual(col(arr, 1).map(val), ['b', 'g', 'l', 'q', 'v'])
