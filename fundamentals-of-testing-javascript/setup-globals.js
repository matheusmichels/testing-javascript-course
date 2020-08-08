function it(title, callback) {
  try {
    callback();
    console.log('\x1b[32m','✓', '\x1b[37m', title);
  } catch (err) {
    console.log('\x1b[31m','✗', '\x1b[37m', title);
    console.error(err);
  }
}

function describe(title, callback) {
  console.log(title);
  callback();
}

const assertions = (actual, isNot) => {
  return {
    toBe(expected) {
      const isEqual = actual === expected;
  
      if (!isEqual && !isNot) {
        throw new Error(`${actual} is not equal to ${expected}`);
      } else if (isEqual && isNot) {
        throw new Error(`${actual} is equal to ${expected}`);
      }
    }
  }
};

function expect(actual) {
  return {
    ...assertions(actual),
    not: {
      ...assertions(actual, true),
    }
  }
}

global.it = it;
global.expect = expect;
global.describe = describe;