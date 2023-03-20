export const randomInRange = (min: number, max: number, type: 'int' | 'float' = 'float') => {
  if (type === 'int') {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return Math.random() * (max - min) + min;
};
