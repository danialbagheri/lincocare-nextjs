interface ParameterTypes {
  state: 1 | -1;
  index: number;
  arraySize: number;
  setIndex: (index: number) => void;
}

export function handleSwipeChange({
  state,
  index,
  arraySize,
  setIndex,
}: ParameterTypes) {
  switch (state) {
    case 1:
      if (index < arraySize - 1) {
        setIndex(index + 1);
      } else setIndex(0);
      break;
    case -1:
      if (index > 0) {
        setIndex(index - 1);
      } else setIndex(arraySize - 1);
      break;
    default:
      break;
  }
}
