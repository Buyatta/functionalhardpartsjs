//partial application
const multiply = (a, b) => { a * b }
function prefillFunction(fn, prefilledValue) {
  const inner = (liveInput) => {
    const output = fn(liveInput, prefilledValue)
    return output
  }
  return inner
}

const multiplyBy2 = prefillFunctiom(multipy, 2)
const result = multiplyBy2(5)

/*closure
const oncify = (convertMe) => {
  let counter = 0;
  const inner = (input) => {
    if (counter === 0) {
      const output = convertMe(input)
      counter++;
      return output
    }
    return "sorry"
  };
  return inner;
};

const multiplyBy2 = (num) => num * 2;
const funcGenerator = oncify(multiplyBy2);
funcGenerator(10);

/*reduce
const multiplBy2 = x => x * 2
const add3 = x => x + 3
const divideBy5 = x => x / 5

const reduce = (array, howcombine, buildup)=>{
  for (let i = 0; i < array.length; i++){
    buildup = howcombine(buildup,array[i])
  }
return buildup
}


const runFunctionOnInput = (input, fn) => {
  return fn(input)
}
const output = reduce([multiplBy2,add3,divideBy5],runFunctionOnInput, 11)


/*reducer function
const reducer = (array, howtocombine, building) => {
  for (let i = 0; i < array.length; i++){
    building = howtocombine(building,array[i])
  }
  return building
}
const add = (a, b) => a + b
const summed = reducer([1,2,3],add,0)


/*to avoid repetition code
const copyArrayAndManipulate = (array,instructions) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i] / 2));
  }
  return output;
};

const multiplyBy2 = (input) => {
    return input * 2
}
consst result = copyArrayAndManipulate([1,2,3],multiplyBy2)




//2nd code
const copyArraydivideBy2 = (array) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }
  return output;
};
const myArray = [1, 2, 3];
const result = copyArrayAnddivideBy2(myArray);

//1st code
const copyArrayAndMultiplyBy2 = (array) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
};
const myArray = [1, 2, 3];
const result = copyArrayAndMultiplyBy2(myArray);
()
*/
