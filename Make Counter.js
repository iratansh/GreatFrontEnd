/**
 * @param {number} initialValue
 * @return {Function}
 */
export default function makeCounter(initialValue = 0) {
  function increment() {
    return initialValue++;
  }
  return increment
}
