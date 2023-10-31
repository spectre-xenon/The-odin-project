function fibonacci(n) {
  const Arr = [0, 1];

  let first = 0;
  let sec = 1;
  let third;

  for (let index = 0; index < n; index++) {
    third = first + sec;
    Arr.push(third);

    sec = first;
    first = third;
  }

  return Arr;
}

function fibRec(n, Arr = [0, 1]) {
  if (Arr.length >= n) return Arr;

  return fibRec(n, [...Arr, Arr.at(-2) + Arr.at(-1)]);
}

console.log(fibRec(5000));
