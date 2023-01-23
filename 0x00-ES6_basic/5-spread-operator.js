export default function concatArrays(...myArguments) {
  const result = [];
  for (const arg of myArguments) {
    result.push(...arg);
  }
  return result;
}
