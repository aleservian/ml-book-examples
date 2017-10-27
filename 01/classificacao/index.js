import {MultinomialNB} from 'ml-naivebayes'

// dog = 0
// pig = 1
// first indice = It is fat?
// second indice = It have little leg?
// third indice = It does auau?

const model = new MultinomialNB();
const pigOne = [1,1,0];
const pigTwo = [1,1,0];
const pigThree = [1,1,0];
const dogOne = [1,1,1];
const dogTwo = [0,1,1];
const dogThree = [0,1,1];

const data = [pigOne,pigTwo,pigThree,dogOne,dogTwo,dogThree];
const marks = [1,1,1,0,0,0];

const mysteriousOne = [1,1,1];
const mysteriousTwo = [1,0,0];
const mysteriousThree = [1,0,1];
const test = [mysteriousOne,mysteriousTwo,mysteriousThree];
const marks_test = [0,1,0];

model.train(data, marks);

const result = model.predict(test);

console.log(result)