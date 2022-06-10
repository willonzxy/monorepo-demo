const foo = () => {
  return new Promise(res => res(1));
};

console.log(foo());

export { foo };
