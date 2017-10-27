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

const differences = result.map((value, index) => value - marks_test[index]);
const hits = differences.filter(value => value===0);
const totalHits = hits.length;
const totalElementsTest = test.length;
const hitRate = 100 * (totalHits / totalElementsTest);

const message = `
                  Result: ${result},
                  Hits: ${hits},
                  Total Hits: ${totalHits},
                  Hit Rate: ${hitRate}%
                `;
                
console.log(message)