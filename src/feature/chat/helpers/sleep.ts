const MS_MULTIPLIER = 1000;

export const sleepOneSecond = (sleepSeconds: number = 1) => {
  return new Promise((resolve) => {
    setTimeout(resolve, sleepSeconds * MS_MULTIPLIER);
  });
};
