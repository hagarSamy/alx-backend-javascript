export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    const task1 = true;
    const task21 = false;
    task = task21;
    task2 = task1;
  }

  return [task, task2];
}
