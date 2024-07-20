export const mergeClassNames = (...classes: (string | undefined)[]): string => {
  return classes.filter(Boolean).join(" ");
};
