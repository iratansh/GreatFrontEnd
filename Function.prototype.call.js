/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {any}
 */
Function.prototype.myCall = function (thisArg, ...argArray) {
  thisArg = Object(thisArg);
  thisArg.__tempFn = this
  const result = thisArg.__tempFn(...argArray);
  delete thisArg.__tempFn;
  return result;
};
