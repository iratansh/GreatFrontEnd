/**
 * @param number initialValue
 * @return Object
 */
export default function useCounter(initialValue) {
  if (!initialValue) {
    initialValue = 0;
  }
  const original = initialValue;

  const count_obj = {};
  count_obj.count = initialValue;
  
  function increment() {
    count_obj.count += 1;
  }
  function decrement() {
    count_obj.count -= 1;
  }
  function reset() {
    count_obj.count = original;
  }
  function setCount(value: number) {
    if (typeof value === 'function') {
      count_obj.count = value(count_obj.count);
    } else {
      count_obj.count = value;
    }
  }


  count_obj.increment = increment;
  count_obj.decrement = decrement;
  count_obj.reset = reset;
  count_obj.setCount = setCount;

  return count_obj;
}
