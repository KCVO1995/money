const createDay = (x: number, y: number) => {
  const week = [];
  for (let i = x; i < y; i++) {
    week.push(i);
  }
  return week;
};
const days = {
  week1: createDay(1, 8),
  week2: createDay(8, 15),
  week3: createDay(15, 22),
  week4: createDay(22, 29),
  week5: createDay(29, 31)
};


export default days;