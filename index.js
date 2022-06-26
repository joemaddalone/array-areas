/**
 * @param  {array} arr
 * @param  {number} row
 * @param  {number} col
 */
const cell = (arr, row, col) => ({ row, col, val: arr[row][col] })

export const toCoords = (arr) => {
  return arr.map((row, i) => row.map((cell, j) => [i, j])).flat()
}
/**
 * @param  {array} arr
 * @param  {number} row
 * @param  {number} col
 */
export const diagonal = (arr, row, col) => {
  return toCoords(arr)
    .filter((c) => row - c[0] === col - c[1])
    .map((dc) => cell(arr, dc[0], dc[1]))
}
/**
 * @param  {array} arr
 * @param  {number} row
 * @param  {number} col
 */
export const antidiagonal = (arr, row, col) => {
  return toCoords(arr)
    .filter((c) => {
      if (row === c[0] && col === c[1]) {
        return true
      }
      const cResult = col - c[1]
      const rResult = row - c[0]
      if (cResult < 0 || rResult < 0) {
        // one of them must be negative
        return Math.min(cResult, rResult) === Math.max(cResult, rResult) * -1
      } else {
        return false
      }
    })
    .map((dc) => cell(arr, dc[0], dc[1]))
}
/**
 * @param  {array} arr
 * @param  {number} col
 */
export const col = (arr, col) => {
  return toCoords(arr)
    .filter((c) => col === c[1])
    .map((dc) => cell(arr, dc[0], dc[1]))
}
/**
 * @param  {array} arr
 * @param  {number} row
 */
export const row = (arr, row) => {
  return toCoords(arr)
    .filter((r) => row === r[0])
    .map((dc) => cell(arr, dc[0], dc[1]))
}
/**
 * @param  {} arr
 * @param  {} cell1
 * @param  {} cell2
 */
export const area = (arr, cell1, cell2) => {
  const leftCell = cell1[1] <= cell2[1] ? cell1 : cell2
  const rightCell = cell1[1] <= cell2[1] ? cell2 : cell1
  const topCell = cell1[0] <= cell2[0] ? cell1 : cell2
  const bottomCell = cell1[0] <= cell2[0] ? cell2 : cell1

  const cols = Array.from({ length: rightCell[1] - leftCell[1] + 1 })
  const rows = Array.from({ length: bottomCell[0] - topCell[0] + 1 })

  return rows.map((_, row) => {
    return cols.map((_, col) => {
      const r = topCell[0] + row
      const c = leftCell[1] + col
      return cell(arr, r, c)
    })
  })
}
