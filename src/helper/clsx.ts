type Obj = Record<string, boolean>;

export const clsx = (arr: string[], obj: Obj = {}): string => {
  return [
    ...arr,
    Object.entries(obj)
      .filter(([_, val]) => Boolean(val))
      .map(([key, _]) => key),
  ].join(" ");
};
