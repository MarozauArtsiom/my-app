export const getRandomData = (length = 1e2) => {
  const result = Array.from({ length }).map((_x, i) => ({
    value: Math.trunc(Math.random() * 100),
    key: `${Date.now()}_${i}`,
  }));
  return result;
};
