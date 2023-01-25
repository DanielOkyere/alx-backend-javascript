export default function gaurdrail(mathFunction) {
  const queue = [];
  let val;
  try {
    val = mathFunction();
  } catch (err) {
    val = err.toString();
  }

  queue.push(val, 'Gaurdrail was processed');
  return queue;
}
