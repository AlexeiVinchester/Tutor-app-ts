function* generateSequence(amount: number) {
  for (let i = 0; i < amount; i++) {
    yield i;
  }
}

const range = (amount: number) => {
  return [...generateSequence(amount)];
}

export { range };