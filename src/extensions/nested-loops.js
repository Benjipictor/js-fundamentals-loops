const START = 1
const END = 10

const simpleOne = []
const nestedOne = []
const nestedTwo = []
const deepOne = []
const deepTwo = []
const deepThree = []

// 1. Using a for loop from 1 to 10, add the value of the 'loop index' to the array 'simpleOne'
//    eg [1,2,3...]

// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
for (let i = START; i <= END; i++) {
  simpleOne.push(i)
}
// console.log(simpleOne)
// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for (let i = START; i <= END; i++) {
  const N1 = []
  nestedOne.push(N1)
  for (let j = START; j <= i; j++) {
    N1.push(i)
  }
}
// console.log(nestedOne)

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = START; i <= END; i++) {
  const N1 = []
  nestedTwo.push(N1)
  for (let j = START; j <= i; j++) {
    N1.push(i - j + 1)
  }
}
// console.log(nestedTwo)

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = START; i <= END; i++) {
  const N1 = []
  deepOne.push(N1)
  for (let j = START; j <= i; j++) {
    const N2 = []
    N1.push(N2)
    for (let k = START; k <= j; k++) {
      N2.push(i)
    }
  }
}

// console.log(deepOne)
// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = START; i <= END; i++) {
  const N1 = []
  deepTwo.push(N1)
  for (let j = START; j <= i; j++) {
    const N2 = []
    N1.push(N2)
    for (let k = START; k <= j; k++) {
      N2.push(k)
    }
  }
}
// console.log(deepTwo)

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]

for (let i = START; i <= END; i++) {
  const N1 = []
  deepThree.push(N1)
  for (let j = START; j <= i; j++) {
    const N2 = []
    N1.push(N2)
    let AVG = 0
    for (let k = START; k <= j; k++) {
      AVG += k * k
    }
    N2.push(AVG / j)
  }
}
console.log(deepThree)

module.exports = {
  START,
  END,
  simpleOne,
  nestedOne,
  nestedTwo,
  deepOne,
  deepTwo,
  deepThree
}
