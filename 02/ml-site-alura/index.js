import {MultinomialNB} from 'ml-naivebayes'
import loadAcess from './loadAccess';
import messageResult from './messageResult';

const headers = {
  x: ['home', 'como_funciona', 'contato'],
  y: 'comprou'
}

const getSliceArray = (array, end) => array.slice(0,end);

const success = data => {
  const {x,y} = data;
  const trainingData = x.slice(0,90);
  const trainingMarks =  y.slice(0,90);
  const testData = x.slice(-9);
  const testDataLen = testData.length;
  const testMarks = y.slice(-9);
  const model = new MultinomialNB();
  model.train(trainingData, trainingMarks);
  const result = model.predict(testData);
  const messageEnd = messageResult(result, testMarks, testDataLen);
  
  console.log(messageEnd);
}

loadAcess("acesso.csv", headers)
  .then(success)