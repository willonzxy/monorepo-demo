import "core-js";

export const foo = (): Promise<number> => {
  return new Promise(res => res(1));
};

export const goo = [1, ...[1]];

export const test: string = "paths";
