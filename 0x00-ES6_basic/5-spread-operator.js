export default function concatArrays(...myArguments) {
  return [].concat(...myArguments.map((el) => [...el]));
}
